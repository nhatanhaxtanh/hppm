CREATE TABLE IF NOT EXISTS tag (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name        VARCHAR(150) NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS uk_tag_name
    ON tag (name);

CREATE INDEX IF NOT EXISTS idx_tag_created_at
    ON tag (created_at);

CREATE TABLE IF NOT EXISTS blog_post (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title          VARCHAR(255) NOT NULL,
    status         VARCHAR(30) NOT NULL,
    slug           VARCHAR(255) NOT NULL,
    content        TEXT NULL,
    author_id      UUID NOT NULL,
    thumbnail_url  VARCHAR(1000) NULL,
    created_at     TIMESTAMP NOT NULL DEFAULT now(),
    updated_at     TIMESTAMP NULL,
    deleted_at     TIMESTAMP NULL,

    CONSTRAINT fk_blog_post_author
        FOREIGN KEY (author_id)
        REFERENCES account(id)
);

CREATE UNIQUE INDEX IF NOT EXISTS uk_blog_post_slug
    ON blog_post (slug);

CREATE INDEX IF NOT EXISTS idx_blog_post_status_created_at
    ON blog_post (status, created_at);

CREATE INDEX IF NOT EXISTS idx_blog_post_author_id
    ON blog_post (author_id);

CREATE INDEX IF NOT EXISTS idx_blog_post_deleted_at
    ON blog_post (deleted_at);

CREATE TABLE IF NOT EXISTS blog_tag (
    post_id UUID NOT NULL,
    tag_id  UUID NOT NULL,

    CONSTRAINT pk_blog_tag
        PRIMARY KEY (post_id, tag_id),

    CONSTRAINT fk_blog_tag_post
        FOREIGN KEY (post_id)
        REFERENCES blog_post(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_blog_tag_tag
        FOREIGN KEY (tag_id)
        REFERENCES tag(id)
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_blog_tag_post_id
    ON blog_tag (post_id);

CREATE INDEX IF NOT EXISTS idx_blog_tag_tag_id
    ON blog_tag (tag_id);
