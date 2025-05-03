CREATE TABLE "danh_sach_cho" (
  "id" serial PRIMARY KEY,
  "ma_thi_sinh" int,
  "ma_lich_thi" int
);

CREATE TABLE "phieu_gia_han" (
  "id" serial PRIMARY KEY,
  "ma_lich_thi_moi" int,
  "ma_thi_sinh" int,
  "ma_lich_thi_cu" int,
  "ma_nhan_vien_ke_toan" int,
  "ma_nhan_vien_tiep_nhan" int,
  "trang_thai" varchar(20)
);

CREATE TABLE "phieu_dang_ky" (
  "id" serial PRIMARY KEY,
  "ma_nhan_vien_ke_toan" int,
  "ma_nguoi_dang_ky" int,
  "ma_loai_phieu_dang_ky" int,
  "ma_nhan_vien_tiep_nhan" int,
  "ngay_dang_ky" date,
  "trang_thai" varchar(20)
);

CREATE TABLE "nguoi_dang_ky" (
  "id" serial PRIMARY KEY,
  "ho_va_ten" varchar(20),
  "so_dien_thoai" varchar(15),
  "email" varchar(50)
);

CREATE TABLE "don_vi_dang_ky" (
  "id" serial PRIMARY KEY,
  "dia_chi" text
);

CREATE TABLE "nguoi_dang_ky_tu_do" (
  "id" serial PRIMARY KEY,
  "so_can_cuoc_cong_dan" varchar(15)
);

CREATE TABLE "thi_sinh" (
  "id" serial PRIMARY KEY,
  "ho_va_ten" varchar(20),
  "so_can_cuoc_cong_dan" varchar(15),
  "so_dien_thoai" varchar(15)
);

CREATE TABLE "thi_sinh_lich_thi" (
  "ma_phieu_dang_ky" int,
  "ma_thi_sinh" int,
  "ma_lich_thi" int,
  "so_bao_danh" varchar,
  "trang_thai" varchar,
  PRIMARY KEY ("ma_thi_sinh", "ma_lich_thi")
);

CREATE TABLE "lich_thi" (
  "id" serial PRIMARY KEY,
  "ma_loai_chung_chi" int,
  "ma_nhan_vien" int,
  "ma_phong_thi" int,
  "thoi_gian_thi" timestamp,
  "so_luong_thi_sinh_du_kien" int,
  "so_luong_thi_sinh_dang_ky" int,
  "trang_thai" varchar(20)
);

CREATE TABLE "nhan_vien_coi_thi_lich_thi" (
  "ma_nhan_vien_coi_thi" int,
  "ma_lich_thi" int,
  "vai_tro" varchar(20),
  PRIMARY KEY ("ma_nhan_vien_coi_thi", "ma_lich_thi")
);

CREATE TABLE "phong_thi" (
  "id" serial PRIMARY KEY,
  "ten_phong_thi" varchar(5),
  "thuoc_toa_nha" varchar(5),
  "thuoc_tang" varchar(5),
  "dia_chi" text,
  "suc_chua" int
);

CREATE TABLE "nhan_vien_ke_toan" (
  "id" serial PRIMARY KEY
);

CREATE TABLE "bai_thi" (
  "id" serial PRIMARY KEY,
  "ma_thi_sinh" int,
  "ma_lich_thi" int,
  "vi_tri_luu_tru" text
);

CREATE TABLE "loai_chung_chi" (
  "id" serial PRIMARY KEY,
  "ma_don_vi_cham_thi" int,
  "ten_loai_chung_chi" varchar(20),
  "thoi_han" varchar(10)
);

CREATE TABLE "don_vi_cham_thi" (
  "id" serial PRIMARY KEY,
  "ten_don_vi_cham_thi" varchar,
  "dia_chi" varchar,
  "so_dien_thoai" varchar,
  "email" varchar
);

CREATE TABLE "hoa_don" (
  "id" serial PRIMARY KEY,
  "ma_nhan_vien_ke_toan" int,
  "ngay_lap" timestamp,
  "trang_thai" varchar(20),
  "giam_gia" real
);

CREATE TABLE "thi_sinh_lich_thi_hoa_don" (
  "ma_hoa_don" int,
  "ma_thi_sinh" int,
  "ma_lich_thi" int,
  "ma_gia_dich_vu" int,
  PRIMARY KEY ("ma_hoa_don", "ma_thi_sinh", "ma_lich_thi")
);

CREATE TABLE "ket_qua_thi" (
  "id" serial PRIMARY KEY,
  "ma_nhan_vien_trung_tam" int,
  "vi_tri_luu_tru" text,
  "ngay_nhap" date,
  "so_diem" real
);

CREATE TABLE "chung_chi" (
  "id" serial PRIMARY KEY,
  "ma_nhan_vien_trung_tam" int,
  "ma_nhan_vien_ke_toan" int,
  "ma_bai_thi" int,
  "vi_tri_luu_tru" varchar,
  "ngay_in" date,
  "trang_thai" varchar
);

CREATE TABLE "nhan_vien" (
  "id" serial PRIMARY KEY,
  "ho_va_ten" varchar(20),
  "so_can_cuoc_cong_dan" varchar(15),
  "dia_chi" text,
  "so_dien_thoai" varchar(15),
  "email" varchar(50)
);

CREATE TABLE "bang_tinh_ket_qua_va_chung_chi" (
  "id" serial PRIMARY KEY,
  "ma_nhan_vien_nhap_lieu" int,
  "duong_dan_truy_cap" text
);

CREATE TABLE "nhan_vien_nhap_lieu" (
  "id" serial PRIMARY KEY
);

CREATE TABLE "nhan_vien_tiep_nhan" (
  "id" serial PRIMARY KEY
);

CREATE TABLE "nhan_vien_trung_tam" (
  "id" serial PRIMARY KEY
);

CREATE TABLE "loai_dich_vu" (
  "id" serial PRIMARY KEY,
  "ten_loai_dich_vu" varchar(20)
);

CREATE TABLE "gia_dich_vu" (
  "id" serial PRIMARY KEY,
  "ma_loai_dich_vu" int,
  "chi_phi" real
);

CREATE TABLE "gia_dich_vu_hien_hanh" (
  "id" serial PRIMARY KEY,
  "ma_gia_dich_vu" int
);

CREATE TABLE "loai_phieu_dang_ky" (
  "id" serial PRIMARY KEY,
  "ten_loai_phieu_dang_ky" varchar(10)
);

CREATE TABLE "tai_khoan" (
  "id" serial PRIMARY KEY,
  "ten_dang_nhap" varchar(100),
  "mat_khau" varchar(100),
  "ma_quyen" int
);

CREATE TABLE "quyen" (
  "id" serial PRIMARY KEY,
  "ten_quyen" varchar(20)
);

CREATE TABLE "nhan_vien_coi_thi" (
  "id" serial PRIMARY KEY
);

COMMENT ON COLUMN "danh_sach_cho"."id" IS 'Mã danh sách chờ';

COMMENT ON COLUMN "phieu_gia_han"."id" IS 'Mã phiếu gia hạn';

COMMENT ON COLUMN "phieu_dang_ky"."id" IS 'Mã phiếu đăng ký';

COMMENT ON COLUMN "nguoi_dang_ky"."id" IS 'Mã người đăng ký';

COMMENT ON COLUMN "don_vi_dang_ky"."id" IS 'Mã đơn vị đăng ký';

COMMENT ON COLUMN "nguoi_dang_ky_tu_do"."id" IS 'Mã người đăng ký tự do';

COMMENT ON COLUMN "thi_sinh"."id" IS 'Mã thí sinh';

COMMENT ON COLUMN "lich_thi"."id" IS 'Mã lịch thi';

COMMENT ON COLUMN "phong_thi"."id" IS 'Mã phòng thi';

COMMENT ON COLUMN "nhan_vien_ke_toan"."id" IS 'Mã nhân viên kế toán';

COMMENT ON COLUMN "bai_thi"."id" IS 'Mã bài thi';

COMMENT ON COLUMN "loai_chung_chi"."id" IS 'Mã loại chứng chỉ';

COMMENT ON COLUMN "don_vi_cham_thi"."id" IS 'Mã đơn vị chấm thi';

COMMENT ON COLUMN "hoa_don"."id" IS 'Mã hóa đơn';

COMMENT ON COLUMN "ket_qua_thi"."id" IS 'Mã kết quả thi';

COMMENT ON COLUMN "chung_chi"."id" IS 'Mã chứng chỉ';

COMMENT ON COLUMN "nhan_vien"."id" IS 'Mã nhân viên';

COMMENT ON COLUMN "bang_tinh_ket_qua_va_chung_chi"."id" IS 'Mã bảng tính kết quả và chứng chỉ';

COMMENT ON COLUMN "nhan_vien_nhap_lieu"."id" IS 'Mã nhân viên nhập liệu';

COMMENT ON COLUMN "nhan_vien_tiep_nhan"."id" IS 'Mã nhân viên tiếp nhận';

COMMENT ON COLUMN "nhan_vien_trung_tam"."id" IS 'Mã nhân viên trung tâm';

COMMENT ON COLUMN "loai_dich_vu"."id" IS 'Mã loại dịch vụ';

COMMENT ON COLUMN "gia_dich_vu"."id" IS 'Mã giá dịch vụ';

COMMENT ON COLUMN "loai_phieu_dang_ky"."id" IS 'Mã loại phiếu đăng ký';

COMMENT ON COLUMN "tai_khoan"."id" IS 'Mã tài khoản';

COMMENT ON COLUMN "quyen"."id" IS 'Mã quyền';

ALTER TABLE "phieu_gia_han" ADD FOREIGN KEY ("ma_lich_thi_moi") REFERENCES "lich_thi" ("id");

ALTER TABLE "phieu_gia_han" ADD FOREIGN KEY ("ma_thi_sinh") REFERENCES "thi_sinh" ("id");

ALTER TABLE "phieu_gia_han" ADD FOREIGN KEY ("ma_lich_thi_cu") REFERENCES "lich_thi" ("id");

ALTER TABLE "phieu_gia_han" ADD FOREIGN KEY ("ma_nhan_vien_ke_toan") REFERENCES "nhan_vien_ke_toan" ("id");

ALTER TABLE "phieu_dang_ky" ADD FOREIGN KEY ("ma_nhan_vien_ke_toan") REFERENCES "nhan_vien_ke_toan" ("id");

ALTER TABLE "phieu_dang_ky" ADD FOREIGN KEY ("ma_nguoi_dang_ky") REFERENCES "nguoi_dang_ky" ("id");

ALTER TABLE "phieu_dang_ky" ADD FOREIGN KEY ("ma_loai_phieu_dang_ky") REFERENCES "loai_phieu_dang_ky" ("id");

ALTER TABLE "thi_sinh_lich_thi" ADD FOREIGN KEY ("ma_thi_sinh") REFERENCES "thi_sinh" ("id");

ALTER TABLE "thi_sinh_lich_thi" ADD FOREIGN KEY ("ma_lich_thi") REFERENCES "lich_thi" ("id");

ALTER TABLE "lich_thi" ADD FOREIGN KEY ("ma_nhan_vien") REFERENCES "nhan_vien" ("id");

ALTER TABLE "lich_thi" ADD FOREIGN KEY ("ma_phong_thi") REFERENCES "phong_thi" ("id");

ALTER TABLE "nhan_vien_coi_thi_lich_thi" ADD FOREIGN KEY ("ma_lich_thi") REFERENCES "lich_thi" ("id");

ALTER TABLE "bai_thi" ADD FOREIGN KEY ("ma_thi_sinh") REFERENCES "thi_sinh" ("id");

ALTER TABLE "bai_thi" ADD FOREIGN KEY ("ma_lich_thi") REFERENCES "lich_thi" ("id");

ALTER TABLE "hoa_don" ADD FOREIGN KEY ("ma_nhan_vien_ke_toan") REFERENCES "nhan_vien_ke_toan" ("id");

ALTER TABLE "thi_sinh_lich_thi_hoa_don" ADD FOREIGN KEY ("ma_hoa_don") REFERENCES "hoa_don" ("id");

ALTER TABLE "thi_sinh_lich_thi_hoa_don" ADD FOREIGN KEY ("ma_thi_sinh") REFERENCES "thi_sinh" ("id");

ALTER TABLE "thi_sinh_lich_thi_hoa_don" ADD FOREIGN KEY ("ma_lich_thi") REFERENCES "lich_thi" ("id");

ALTER TABLE "thi_sinh_lich_thi_hoa_don" ADD FOREIGN KEY ("ma_gia_dich_vu") REFERENCES "gia_dich_vu" ("id");

ALTER TABLE "ket_qua_thi" ADD FOREIGN KEY ("ma_nhan_vien_trung_tam") REFERENCES "nhan_vien_trung_tam" ("id");

ALTER TABLE "chung_chi" ADD FOREIGN KEY ("ma_nhan_vien_trung_tam") REFERENCES "nhan_vien_trung_tam" ("id");

ALTER TABLE "chung_chi" ADD FOREIGN KEY ("ma_nhan_vien_ke_toan") REFERENCES "nhan_vien_ke_toan" ("id");

ALTER TABLE "chung_chi" ADD FOREIGN KEY ("ma_bai_thi") REFERENCES "bai_thi" ("id");

ALTER TABLE "bang_tinh_ket_qua_va_chung_chi" ADD FOREIGN KEY ("ma_nhan_vien_nhap_lieu") REFERENCES "nhan_vien_nhap_lieu" ("id");

ALTER TABLE "gia_dich_vu" ADD FOREIGN KEY ("ma_loai_dich_vu") REFERENCES "loai_dich_vu" ("id");

ALTER TABLE "gia_dich_vu_hien_hanh" ADD FOREIGN KEY ("ma_gia_dich_vu") REFERENCES "gia_dich_vu" ("id");

ALTER TABLE "tai_khoan" ADD FOREIGN KEY ("ma_quyen") REFERENCES "quyen" ("id");

ALTER TABLE "danh_sach_cho" ADD CONSTRAINT "ts_dsc" FOREIGN KEY ("ma_thi_sinh") REFERENCES "thi_sinh" ("id");

ALTER TABLE "danh_sach_cho" ADD CONSTRAINT "lt_dsc" FOREIGN KEY ("ma_lich_thi") REFERENCES "lich_thi" ("id");

ALTER TABLE "phieu_gia_han" ADD CONSTRAINT "nvtn_pgh" FOREIGN KEY ("ma_nhan_vien_tiep_nhan") REFERENCES "nhan_vien_tiep_nhan" ("id");

ALTER TABLE "phieu_dang_ky" ADD CONSTRAINT "nvtn_pdk" FOREIGN KEY ("ma_nhan_vien_tiep_nhan") REFERENCES "nhan_vien_tiep_nhan" ("id");

ALTER TABLE "don_vi_dang_ky" ADD CONSTRAINT "ndk_dvdk" FOREIGN KEY ("id") REFERENCES "nguoi_dang_ky" ("id");

ALTER TABLE "nguoi_dang_ky_tu_do" ADD CONSTRAINT "ndk_ndktd" FOREIGN KEY ("id") REFERENCES "nguoi_dang_ky" ("id");

ALTER TABLE "thi_sinh_lich_thi" ADD CONSTRAINT "pdk_tslt" FOREIGN KEY ("ma_phieu_dang_ky") REFERENCES "phieu_dang_ky" ("id");

ALTER TABLE "lich_thi" ADD CONSTRAINT "lcc_lt" FOREIGN KEY ("ma_loai_chung_chi") REFERENCES "loai_chung_chi" ("id");

ALTER TABLE "nhan_vien_coi_thi_lich_thi" ADD CONSTRAINT "nvct_nvctlt" FOREIGN KEY ("ma_nhan_vien_coi_thi") REFERENCES "nhan_vien_coi_thi" ("id");

ALTER TABLE "nhan_vien_ke_toan" ADD CONSTRAINT "nv_nvkt" FOREIGN KEY ("id") REFERENCES "nhan_vien" ("id");

ALTER TABLE "nhan_vien_coi_thi" ADD CONSTRAINT "nv_nvct" FOREIGN KEY ("id") REFERENCES "nhan_vien" ("id");

ALTER TABLE "loai_chung_chi" ADD CONSTRAINT "dvct_lcc" FOREIGN KEY ("ma_don_vi_cham_thi") REFERENCES "don_vi_cham_thi" ("id");

ALTER TABLE "nhan_vien_nhap_lieu" ADD CONSTRAINT "nv_nvnl" FOREIGN KEY ("id") REFERENCES "nhan_vien" ("id");

ALTER TABLE "nhan_vien_tiep_nhan" ADD CONSTRAINT "nv_nvtn" FOREIGN KEY ("id") REFERENCES "nhan_vien" ("id");

ALTER TABLE "nhan_vien_trung_tam" ADD CONSTRAINT "nv_nvtt" FOREIGN KEY ("id") REFERENCES "nhan_vien" ("id");
