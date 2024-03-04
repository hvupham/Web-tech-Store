import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private host = "https://provinces.open-api.vn/api/";
  constructor(private http: HttpClient) { }

  getProvinces(provinceCode: string): Observable<string> {
    const api = `${this.host}p/${provinceCode}?depth=1`;
    return this.http.get(api).pipe(map((province: any) => province.name));
  }

  // Hàm lấy tên huyện theo mã code
  getDistricts(districtCode: string): Observable<string> {
    const api = `${this.host}d/${districtCode}?depth=2`;
    return this.http.get(api).pipe(map((district: any) => district.name));
  }

  // Hàm lấy tên phường/xã theo mã code
  getWards(wardCode: string): Observable<string> {
    const api = `${this.host}w/${wardCode}?depth=2`;
    return this.http.get(api).pipe(map((ward: any) => ward.name));
  }
  callAPI(depth: number): Observable<any> {
    const api = `${this.host}?depth=${depth}`;
    return this.http.get(api);
  }

  callApiDistrict(provinceCode: string): Observable<any> {
    const api = `${this.host}p/${provinceCode}?depth=2`;
    return this.http.get(api);
  }

  callApiWard(districtCode: string): Observable<any> {
    const api = `${this.host}d/${districtCode}?depth=2`;
    return this.http.get(api);
  }
}