INSERT INTO permission (id, name, description)
VALUES
  (gen_random_uuid(), 'ADMIN.FULL_ACCESS', 'Full admin access to all resources')
ON CONFLICT (name) DO NOTHING;

INSERT INTO role (id, name, description)
VALUES
  (gen_random_uuid(), 'ADMIN', 'System administrator')
ON CONFLICT (name) DO NOTHING;

INSERT INTO role_permission (role_id, permission_id)
SELECT r.id, p.id
FROM role r
JOIN permission p ON p.name IN ('ADMIN.FULL_ACCESS')
WHERE r.name = 'ADMIN'
ON CONFLICT DO NOTHING;