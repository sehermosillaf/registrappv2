import { TestBed } from "@angular/core/testing";

import { ApiServices } from "./api-services.service";

describe("ApiLoginService", () => {
  let service: ApiServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServices);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
