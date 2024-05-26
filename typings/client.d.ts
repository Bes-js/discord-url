import { EventEmitter } from "events";

type EventTypes = 'VanitySuccess' | 'VanityError';


export enum VanityEvents {
    VanitySuccess = 'VanitySuccess',
    VanityError = 'VanityError'
}

/* eslint-disable @typescript-eslint/no-explicit-any */
interface VanityEventPayloads {
    [VanityEvents.VanitySuccess]: [{ statusCode: number, vanityURLCode: string | null, guildId: string }];
    [VanityEvents.VanityError]: [{ statusCode: number, errorMessage: string, guildId: string }];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
interface VanityClientEmitter {
    on<K extends keyof VanityEventPayloads>(event: K, listener: (...args: VanityEventPayloads[K]) => void): this;
    emit<K extends keyof VanityEventPayloads>(event: K, ...args: VanityEventPayloads[K]): boolean;
}

/**
 * VanityClient
 * @param {string} selfToken - Your bot token
 * @param {string} guildId - The guild id you want to set the vanity url for
 * @param {boolean} [betterLog] - Better logging
 * @param {object} [api] - The api version you want to use
 * @param {number} [api.version] - The api version you want to use
 * @returns {VanityClient}
 * @example const client = new VanityClient({
 *    selfToken: '',
 *   guildId: '',
 *  api: {
 *    version: 10
 * },
 * betterLog: true
 * });
 */
export declare class VanityClient extends (EventEmitter as { new(): VanityClientEmitter }) implements VanityClientEmitter {
    constructor(options: { selfToken: string, guildId: string, betterLog?: boolean | true, api?: { version?: 8 | 9 | 10 } });

    /**
     * Set the vanity url for the guild
     * @param {string} vanityURLCode - The vanity url code you want to set
     * @returns {Promise<boolean|null>}
     * @example client.setVanityURL('code')
     * .then((res) => {
     *   console.log(res);
     * });
     * @example client.setVanityURL('code')
     * .then(console.log);
     */
    setVanityURL(vanityURLCode: string | null): Promise<boolean | null>;

}