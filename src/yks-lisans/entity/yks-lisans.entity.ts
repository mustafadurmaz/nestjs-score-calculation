import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('OSYM_LISANS_2023')
export class YksLisansEntity {
  @PrimaryGeneratedColumn()
  ProgramKodu: number;

  @Column()
  UniversiteTuru?: string;

  @Column()
  Sehir: string;

  @Column()
  UniversiteAdi: string;

  @Column()
  FakulteYuksekOkulAdi: string;

  @Column()
  ProgramAdi: string;

  @Column()
  PuanTuru: string;

  @Column()
  Kontenjan: number;

  @Column()
  Yerlesen: number;

  @Column()
  TabanPuan: number;

  @Column()
  OkulBirincisiYerlestirmeKontenjani: number;

  @Column()
  OkulBirincisiYerlestirmeYerlesen: number;

  @Column()
  OkulBirincisiYerlestirmeEnKucukPuan: number;

  @Column()
  OkulBirincisiYerlestirmeEnBuyukPuan: number;

  @Column()
  DepremzedeYerlestirmeKontenjan: number;

  @Column()
  DepremzedeYerlestirmeYerlesen: number;

  @Column()
  DepremzedeYerlestirmeEnKucukPuan: number;

  @Column()
  DepremzedeYerlestirmeEnBuyukPuan: number;

  @Column()
  _34YasUstuKadinYerlestirmeKontenjan: number;

  @Column()
  _34YasUstuKadinYerlestirmeYerlesen: number;

  @Column()
  _34YasUstuKadinYerlestirmeEnKucukPuan: number;

  @Column()
  _34YasUstuKadinYerlestirmeEnBuyukPuan: number;

  @Column()
  Aktif: number;

  @Column()
  Yil: number;

}