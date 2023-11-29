import "reflect-metadata";
import { Express } from "express";
import { CorsRequest } from "cors";
export declare const initialize: (
    app: Express, 
    controllers: Array<any>, 
    cors?: (req: CorsRequest, res: { statusCode?: number | undefined; setHeader(key: string, value: string): any; end(): any; }, next: (err?: any) => any) => void
) => void;
