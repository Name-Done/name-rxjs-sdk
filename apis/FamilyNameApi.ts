// tslint:disable
/**
 * Name Done - Name Service
 * A name service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI } from '../runtime';
import type { OperationOpts, HttpQuery } from '../runtime';
import type {
    BadRequestResponseDto,
    NameResponseDto,
} from '../models';

export interface GetFamilyNamesRequest {
    name?: string;
}

/**
 * no description
 */
export class FamilyNameApi extends BaseAPI {

    /**
     * Get a list of family names
     */
    getFamilyNames({ name }: GetFamilyNamesRequest): Observable<NameResponseDto>
    getFamilyNames({ name }: GetFamilyNamesRequest, opts?: OperationOpts): Observable<AjaxResponse<NameResponseDto>>
    getFamilyNames({ name }: GetFamilyNamesRequest, opts?: OperationOpts): Observable<NameResponseDto | AjaxResponse<NameResponseDto>> {

        const query: HttpQuery = {};

        if (name != null) { query['name'] = name; }

        return this.request<NameResponseDto>({
            url: '/name/family',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

}
