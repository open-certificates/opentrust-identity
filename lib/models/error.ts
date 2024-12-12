import { OidcTokenErrorType } from "@/utils/consts"

export interface ErrorDetail {
    errorKey: string,
    errorMessageCanonical: string,
    errorMessageTranslated?: string
}

export interface ErrorResponseBody {
    statusCode: number,
    errorDetails: Array<ErrorDetail>
}

export interface OIDCErrorResponseBody {
    // The 3 specification-compliant properties
    error: OidcTokenErrorType,
    error_description: string,
    error_uri: string,
    // extensions 
    timestamp: number,
    error_code: string,
    trace_id: string
}