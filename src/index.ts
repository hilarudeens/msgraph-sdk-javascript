/// <reference path="../typings/index.d.ts" />
'use strict';

import * as request from 'superagent';

import {Options, DEFAULT_VERSION, GRAPH_BASE_URL} from "./CommonObj"
import {GraphRequest} from "./GraphRequest"

export class Client {
    // specify client defaults
    config:Options = {
        debugLogging: false,
        defaultVersion: DEFAULT_VERSION,
        baseUrl: GRAPH_BASE_URL
    };

    static init(clientOptions?:Options) {
        var graphClient = new Client();
        for (let key in clientOptions) {
            graphClient.config[key] = clientOptions[key];
        }
        return graphClient;
    }

    /*
     * Entry point for calling api
     */
    api(path:string) {
        return new GraphRequest(this.config, path);
    }

}