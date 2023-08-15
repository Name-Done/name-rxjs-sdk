// tslint:disable
/**
 * Name Done - First Name Service
 * An first name service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface BadRequestResponseDto
 */
export interface BadRequestResponseDto {
    /**
     * HTTP status code of the error
     * @type {number}
     * @memberof BadRequestResponseDto
     */
    statusCode: number;
    /**
     * Short descriptions of the errors
     * @type {Array<string>}
     * @memberof BadRequestResponseDto
     */
    message: Array<string>;
    /**
     * Error type
     * @type {string}
     * @memberof BadRequestResponseDto
     */
    error: string;
}