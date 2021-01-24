import { injectable } from "inversify";
import { metadata } from "@/models/metadata";
import { IMetadataService } from "../interfaces";

// const restMock = require("@/metadata/restaurantInfoMetadata.json");

const mockFilesDictionary: { [key: string]: metadata } = {
  // "api/restaurants": restMock,
};

@injectable()
export default class MetadataService implements IMetadataService {
  public getModelMetadata(resource: string): Promise<metadata> {
    const metaData: metadata = mockFilesDictionary[resource];
    return new Promise<metadata>(resolve => resolve(metaData));
  }
}
