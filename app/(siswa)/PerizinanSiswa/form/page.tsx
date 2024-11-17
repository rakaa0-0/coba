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
import { Textarea } from "@/components/ui/textarea";
import Banner from "./Banner/Banner";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 -z-10">
        <Banner />
      </div>

      <div className="container mx-auto px-8 py-8">
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl font-medium mb-2">Perizinan Siswa</h1>
          <p className="text-sm">
            Platform untuk mempermudah rekapitulasi siswa secara digital
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nama Lengkap</Label>
                  <Input id="fullName" placeholder="Nama Lengkap" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Jenis Kelamin</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih salah satu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="l">Laki-laki</SelectItem>
                      <SelectItem value="p">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="class">Kelas</Label>
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
                  <Label htmlFor="date">Tanggal</Label>
                  <Input type="date" id="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Jurusan</Label>
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
                  <Label>Jam Ke</Label>
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
                  <Label htmlFor="classCode">Kode Kelas</Label>
                  <Input id="classCode" placeholder="Kode Kelas" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Mata pelajaran</Label>
                  <Input id="subject" placeholder="Mata Pelajaran" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Alasan</Label>
                <Textarea
                  id="reason"
                  placeholder="Isi alasan"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="proof">Unggah Bukti</Label>
                <div className="bg-slate-50 p-4 rounded-lg text-center border-2 border-dashed">
                  <p className="text-sm text-slate-500">
                    Seret file atau klik tombol dibawah
                  </p>
                  <Button variant="secondary" className="mt-2">
                    Unggah
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="teacher">Guru/Petugas Piket</Label>
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

              <Button className="w-full" size="lg">
                Kirim
              </Button>
            </form>
          </CardContent>
        </Card>

        <footer className="text-center text-black mt-8">
          <p className="text-sm">
            © Perizinan Siswa 2024. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
