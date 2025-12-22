DO $$
DECLARE
    v_author_id UUID;
BEGIN
    SELECT id INTO v_author_id
    FROM account
    WHERE is_deleted = false
    ORDER BY created_at ASC
    LIMIT 1;

    IF v_author_id IS NULL THEN
        INSERT INTO account (id, created_at, updated_at, is_deleted, email, password, name, is_active)
        VALUES (gen_random_uuid(), now(), NULL, false, 'seed@hppm.com', NULL, 'Seed User', true)
        RETURNING id INTO v_author_id;
    END IF;
END $$;

-- Seed tags (diverse)
INSERT INTO tag (id, name, created_at)
VALUES
    (gen_random_uuid(), 'Dự án thực hiện', now() - interval '120 days'),
    (gen_random_uuid(), 'Dự án tiêu biểu', now() - interval '160 days'),
    (gen_random_uuid(), 'Tin công ty', now() - interval '200 days'),
    (gen_random_uuid(), 'Hoạt động nội bộ', now() - interval '220 days'),
    (gen_random_uuid(), 'Thi công', now() - interval '240 days'),
    (gen_random_uuid(), 'Thiết kế', now() - interval '260 days'),
    (gen_random_uuid(), 'Quản lý vận hành', now() - interval '280 days'),
    (gen_random_uuid(), 'Bàn giao', now() - interval '300 days'),
    (gen_random_uuid(), 'Khách hàng', now() - interval '320 days'),
    (gen_random_uuid(), 'Chung cư', now() - interval '340 days'),
    (gen_random_uuid(), 'Khu dân cư', now() - interval '360 days'),
    (gen_random_uuid(), 'Biệt thự', now() - interval '380 days'),
    (gen_random_uuid(), 'Cập nhật tiến độ', now() - interval '400 days'),
    (gen_random_uuid(), 'Hình ảnh công trình', now() - interval '420 days'),
    (gen_random_uuid(), 'Thông báo', now() - interval '440 days')
ON CONFLICT (name) DO NOTHING;

-- Create a temp table to keep the newly inserted post ids
CREATE TEMP TABLE IF NOT EXISTS tmp_seed_posts (
    id UUID PRIMARY KEY
) ON COMMIT DROP;

TRUNCATE TABLE tmp_seed_posts;

DO $$
DECLARE
    v_author_id UUID;
    v_existing_seed INT;
    v_needed INT;
    i INT;

    v_id UUID;
    v_title TEXT;
    v_slug TEXT;
    v_status TEXT;
    v_created_at TIMESTAMP;
    v_updated_at TIMESTAMP;
    v_thumbnail TEXT;
    v_content TEXT;

    -- Pools
    v_prefixes TEXT[] := ARRAY[
        'Cập nhật tiến độ',
        'Hình ảnh công trình',
        'Tổng quan dự án',
        'Kinh nghiệm thi công',
        'Giải pháp thiết kế',
        'Góc nhìn vận hành',
        'Thông tin bàn giao',
        'Chia sẻ từ đội ngũ',
        'Tin tức dự án',
        'Nhật ký công trình'
    ];

    v_subjects TEXT[] := ARRAY[
        'Khu dân cư Lavela Garden',
        'Cụm chung cư Sky Residences',
        'Khu biệt thự Riviera Cove',
        'Chung cư Eden Riverside',
        'Khu biệt thự Holm Residences',
        'Chung cư Giai Việt',
        'Cụm nhà chung cư Vision-1',
        'Chung cư Vĩnh Tường',
        'Cụm nhà chung cư An Lạc',
        'Chung cư Bình Trị Đông B',
        'Chung cư Imperia An Phú',
        'Chung cư Thủ Thiêm Xanh',
        'Khu căn hộ ven sông',
        'Dự án cải tạo mặt bằng',
        'Hạng mục cảnh quan'
    ];

    v_notes TEXT[] := ARRAY[
        'tiến độ đang được kiểm soát theo kế hoạch',
        'đội ngũ đã hoàn thiện các hạng mục quan trọng',
        'công tác nghiệm thu được thực hiện đúng quy trình',
        'các tiêu chuẩn an toàn được ưu tiên xuyên suốt',
        'chất lượng vật tư được kiểm tra định kỳ',
        'công tác phối hợp các bên được tối ưu',
        'mặt bằng thi công được tổ chức khoa học',
        'các mốc bàn giao được cập nhật liên tục',
        'hạng mục hoàn thiện được triển khai đồng bộ',
        'các vấn đề phát sinh được xử lý kịp thời'
    ];
BEGIN
    SELECT id INTO v_author_id
    FROM account
    WHERE is_deleted = false
    ORDER BY created_at ASC
    LIMIT 1;

    SELECT COUNT(*) INTO v_existing_seed
    FROM blog_post
    WHERE slug LIKE 'seed-%';

    v_needed := 100 - v_existing_seed;
    IF v_needed <= 0 THEN
        -- Enough seed data already
        RETURN;
    END IF;

    FOR i IN 1..v_needed LOOP
        v_title :=
            v_prefixes[1 + floor(random() * array_length(v_prefixes, 1))::int]
            || ' - '
            || v_subjects[1 + floor(random() * array_length(v_subjects, 1))::int]
            || ' (#'
            || (v_existing_seed + i)
            || ')';

        -- Unique slug: seed-<n>-<hash>
        v_slug :=
            'seed-'
            || (v_existing_seed + i)
            || '-'
            || substr(md5(random()::text || clock_timestamp()::text), 1, 10);

        -- status: ~75% PUBLISHED, ~25% DRAFT
        v_status := CASE WHEN random() < 0.75 THEN 'PUBLISHED' ELSE 'DRAFT' END;

        -- created_at distributed over last 24 months
        v_created_at := now() - (interval '730 days' * random());

        -- updated_at after created_at (or null sometimes)
        v_updated_at := CASE
            WHEN random() < 0.85 THEN v_created_at + (interval '30 days' * random())
            ELSE NULL
        END;

        -- thumbnail sometimes
        v_thumbnail := CASE
            WHEN random() < 0.70 THEN
                'https://picsum.photos/seed/'
                || substr(md5(v_slug), 1, 12)
                || '/1200/630'
            ELSE NULL
        END;

        -- "realistic" content: 3-6 paragraphs, mixed sentences
        v_content :=
            'Tổng quan: ' || v_notes[1 + floor(random() * array_length(v_notes, 1))::int] || '. ' ||
            'Trong giai đoạn này, các đội nhóm tập trung vào việc tối ưu chất lượng và tiến độ.' || E'\n\n' ||
            'Chi tiết: ' || v_notes[1 + floor(random() * array_length(v_notes, 1))::int] || '. ' ||
            'Các hạng mục được triển khai theo từng khu vực, đảm bảo không ảnh hưởng đến vận hành chung.' || E'\n\n' ||
            'Ghi nhận: ' || v_notes[1 + floor(random() * array_length(v_notes, 1))::int] || '. ' ||
            'Bộ phận QA/QC tiếp tục kiểm tra định kỳ và cập nhật biên bản nghiệm thu.' || E'\n\n' ||
            'Cập nhật thêm: ' || v_notes[1 + floor(random() * array_length(v_notes, 1))::int] || '. ' ||
            'Chúng tôi sẽ tiếp tục thông tin trong các bài viết tiếp theo.' ||
            CASE
                WHEN random() < 0.50 THEN E'\n\n' || 'Tài liệu tham khảo nội bộ: ' || substr(md5(random()::text), 1, 16)
                ELSE ''
            END;

        INSERT INTO blog_post (
            id, title, status, slug, content, author_id,
            thumbnail_url, created_at, updated_at, deleted_at
        )
        VALUES (
            gen_random_uuid(),
            v_title,
            v_status,
            v_slug,
            v_content,
            v_author_id,
            v_thumbnail,
            v_created_at,
            v_updated_at,
            NULL
        )
        ON CONFLICT (slug) DO NOTHING
        RETURNING id INTO v_id;

        IF v_id IS NOT NULL THEN
            INSERT INTO tmp_seed_posts (id) VALUES (v_id) ON CONFLICT DO NOTHING;
        END IF;
    END LOOP;
END $$;

-- Assign 1..4 random tags per newly inserted post
INSERT INTO blog_tag (post_id, tag_id)
SELECT DISTINCT
    p.id AS post_id,
    t.id AS tag_id
FROM tmp_seed_posts p
CROSS JOIN LATERAL (
    SELECT id
    FROM tag
    ORDER BY random()
    LIMIT (1 + floor(random() * 4))::int
) t
ON CONFLICT DO NOTHING;
