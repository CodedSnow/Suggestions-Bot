CREATE TABLE IF NOT EXISTS servers (
    id TEXT PRIMARY KEY NOT NULL,
    staff_role TEXT,
    suggestion_channel TEXT,
    report_channel TEXT,
    auto_approve INT,
    auto_reject INT,
    approve_emoji TEXT,
    reject_emoji TEXT,
    delete_approved BOOLEAN,
    delete_rejected BOOLEAN,
    submit_blacklist TEXT,
    premium BOOLEAN NOT NULL
);