import React from "react";

type EquipmentTransferFormData = {
  businessUnit: string;
  date: string;
  docNo: string;
  origin: string;
  destination: string;
  trunking: string;
  transporter: string;
  driver: string;
  license: string;
  tripNo: string;
  sealNo: string;
  note: string;
};

type EquipmentTransferFormProps = {
  form: EquipmentTransferFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit?: (e: React.FormEvent) => void;
  disabledFields?: string[];
  children?: React.ReactNode;
};

export default function EquipmentTransferForm({
  form,
  onChange,
  onSubmit,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disabledFields = [],
  children,
}: EquipmentTransferFormProps) {
  return (
    <form
      className="w-[400px] bg-white rounded shadow p-6 flex flex-col gap-2"
      onSubmit={onSubmit}
    >
      <div className="font-bold text-lg mb-2">แบบฟอร์มการจัดส่งอุปกรณ์</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="form-group">
          <label className="form-label required">หน่วยธุรกิจ</label>
          <input
            className="input bg-gray-100 w-full"
            value={form.businessUnit}
            name="businessUnit"
            disabled
          />
        </div>
        <div className="form-group">
          <label className="form-label required">วันที่</label>
          <input
            type="date"
            className="input"
            value={form.date}
            name="date"
            onChange={onChange}
          />
        </div>
        <div className="form-group col-span-2">
          <label className="form-label">เลขที่</label>
          <input
            className="input bg-gray-100 w-full"
            value={form.docNo}
            name="docNo"
            disabled
          />
        </div>
        <div className="form-group col-span-2">
          <label className="form-label">ต้นทาง</label>
          <input
            className="input bg-gray-100 w-full"
            value={form.origin}
            name="origin"
            disabled
          />
        </div>
        <div className="form-group col-span-2">
          <label className="form-label required w-full">ปลายทาง</label>
          <input
            className="input w-full"
            value={form.destination}
            name="destination"
            onChange={onChange}
            placeholder="ปลายทาง"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="form-group col-span-2">
          <label className="form-label">Trunking</label>
          <select
            className="input w-full"
            name="trunking"
            value={form.trunking}
            onChange={onChange}
          >
            <option value="">ไม่กำหนด</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>
        <div className="form-group col-span-2">
          <label className="form-label">ขนส่ง</label>
          <select
            className="input w-full"
            name="transporter"
            value={form.transporter}
            onChange={onChange}
          >
            <option value="Lotus Transport">Lotus Transport</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">พขร.</label>
          <input
            className="input"
            value={form.driver}
            name="driver"
            onChange={onChange}
            placeholder="ชื่อพขร."
          />
        </div>
        <div className="form-group">
          <label className="form-label">ทะเบียนรถ</label>
          <input
            className="input"
            value={form.license}
            name="license"
            onChange={onChange}
            placeholder="ทะเบียนรถ"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Trip No</label>
          <input
            className="input"
            value={form.tripNo}
            name="tripNo"
            onChange={onChange}
            placeholder="Trip No"
          />
        </div>
        <div className="form-group">
          <label className="form-label">ซีลหมายเลข</label>
          <input
            className="input"
            value={form.sealNo}
            name="sealNo"
            onChange={onChange}
            placeholder="ซีลหมายเลข"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">หมายเหตุ</label>
        <input
          className="input"
          value={form.note}
          name="note"
          onChange={onChange}
          placeholder="หมายเหตุ"
        />
      </div>
      {children}
    </form>
  );
}