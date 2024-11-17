import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Banner from "./Banner/Banner";

export default function FormPage() {

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 -z-10">
        <Banner />
      </div>

      <div className="container mx-auto px-8 py-[2.2rem] ">
        <Card className="max-w-[52rem] mt-20 sm:mt-20 md:mt-60 lg:mt-60 xl:mt-60 rounded-2xl mx-auto p-5">
          <CardContent className="p-6 ">
            <form className="space-y-6 ">
              <div className="grid gap-6 md:grid-cols-2 ">
                <div className="space-y-2">
                  <Label className="text-label" htmlFor="fullName">
                    Nama Lengkap
                  </Label>
                  <Input
                    className="text-label-input"
                    id="fullName"
                    placeholder="Nama Lengkap"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-label" htmlFor="izin">
                    Izin
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue
                        className="text-label-input"
                        placeholder="Pilih salah satu"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masuk">Masuk</SelectItem>
                      <SelectItem value="keluar">Keluar</SelectItem>
                      <SelectItem value="pulang">Pulang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-label" htmlFor="class">
                    Kelas
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih salah satu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">Kelas 10</SelectItem>
                      <SelectItem value="11">Kelas 11</SelectItem>
                      <SelectItem value="12">Kelas 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  {" "}
                  <label className="text-label" htmlFor="date">
                    Tanggal
                  </label>{" "}
                  <input
                    type="date"
                    id="date"
                    placeholder="Tanggal"
                    className="block w-full rounded-md border-2 px-2 py-2.5 text-gray-900 shadow-sm outline-none focus:border-[#4C56AA] focus:ring-1 focus:ring-[#4C56AA] placeholder-gray-400 sm:text-sm sm:leading-6"
                  />{" "}
                </div>

                <div className="space-y-2">
                  <Label className="text-label" htmlFor="department">
                    Jurusan
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih salah satu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rpl">RPL</SelectItem>
                      <SelectItem value="tkj">TKJ</SelectItem>
                      <SelectItem value="mm">Multimedia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-label">Jam Ke</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="flex items-center justify-center">
                      s/d
                    </span>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-label" htmlFor="classCode">
                    Kode Kelas
                  </Label>
                  <Input id="classCode" placeholder="Kode Kelas" />
                </div>

                <div className="space-y-2">
                  <Label className="text-label" htmlFor="subject">
                    Mata pelajaran
                  </Label>
                  <Input id="subject" placeholder="Mata Pelajaran" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-label" htmlFor="reason">
                  Alasan
                </Label>
                <Input id="classCode" placeholder="Berikan Alasan" />
              </div>

              <div className="space-y-2">
                <Label className="text-label" htmlFor="proof">
                  Unggah Bukti
                </Label>
                <div className="bg-slate-50 p-4 rounded-lg text-center border-2 border-dashed">
                  <p className="text-sm text-slate-500">
                    Seret file atau klik tombol dibawah
                  </p>
                  <Button variant="secondary" className="mt-2">
                    Unggah
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 bg-[#EFF0FB] p-4 rounded-lg">
                <div className="space-y-2">
                  <Label className="text-label" htmlFor="teacher">
                    Guru Bidang Diklat
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih salah satu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teacher1">Guru 1</SelectItem>
                      <SelectItem value="teacher2">Guru 2</SelectItem>
                      <SelectItem value="teacher3">Guru 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-label" htmlFor="teacher">
                    Petugas Tatib / Piket
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih salah satu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teacher1">Guru 1</SelectItem>
                      <SelectItem value="teacher2">Guru 2</SelectItem>
                      <SelectItem value="teacher3">Guru 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className=" w-[18%] flex mx-auto" size="sm">
                Kirim
              </Button>
            </form>
          </CardContent>
        </Card>

        <footer className="text-center text-black mt-8">
          <div className="p-4">
            {" "}
            <hr className="w-full mx-auto border-[1px] border-[#B0B0B0] my-4" />{" "}
          </div>
          <p className="text-sm">
            © Perizinan Siswa 2024. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
