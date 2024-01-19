export interface AzureAdJwt {
    aud: string
    iss: string
    iat: number
    nbf: number
    exp: number
    acct: number
    acr: string
    aio: string
    amr: string[]
    app_displayname: string
    appid: string
    appidacr: string
    family_name: string
    given_name: string
    idtyp: string
    ipaddr: string
    name: string
    oid: string
    platf: string
    puid: string
    rh: string
    scp: string
    sub: string
    tenant_region_scope: string
    tid: string
    unique_name: string
    upn: string
    uti: string
    ver: string
    wids: string[]
    xms_st: XmsSt
    xms_tcdt: number
}

export interface XmsSt {
    sub: string
}