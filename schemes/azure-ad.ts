import {Oauth2Scheme, OpenIDConnectScheme} from "#auth/runtime";
import type { HTTPRequest } from "@nuxt-alt/auth";
import {jwtDecode} from "jwt-decode";
import type {AzureAdJwt} from "~/schemes/types/ad-jwt.interface";
import {getProp} from "#auth/utils";

export default class AzureAdScheme extends Oauth2Scheme {
    async login(options?: { state?: string; params?: any; nonce?: string }): Promise<void> {
        return super.login(options);
    }

    async fetchUser() {
        return this.$auth.requestWith({
            method: 'GET',
            url: this.options.endpoints.userInfo,
            headers:{
                Authorization: this.$auth.$storage.getUniversal("_token.aad")
            }
        }).then((response) => {
            const user = getProp(response._data, this.options.user.property)

            // Transform the user object
            const customUser = {
                ...user,
                fullName: user.family_name + ' ' + user.given_name,
                roles: ['user']
            }

            // Set the custom user
            // The `customUser` object will be accessible through `this.$auth.user`
            // Like `this.$auth.user.fullName` or `this.$auth.user.roles`
            this.$auth.setUser(customUser)

            return response
        }).catch((error) => {
            this.$auth.callOnError(error, { method: 'fetchUser' })
        })
    }
}