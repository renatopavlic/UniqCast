import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Channel } from '../_models/channel';

@Injectable({ providedIn: 'root' })
export class ChannelsService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Channel[]>(`${environment.apiUrl}/channels`);
    }

    addNew(channelData) {
        return this.http.post<Channel[]>(`${environment.apiUrl}/channels`, channelData);
    }

    deleteById(id) {
        return this.http.delete<Channel[]>(`${environment.apiUrl}/channels/${id}`);
    }

    edit(channel){
        return this.http.put<Channel[]>(`${environment.apiUrl}/channels/${channel.id}`,channel);
    }
}

    

