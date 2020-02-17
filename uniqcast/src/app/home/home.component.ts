import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Channel } from '../_models/channel';
import { ChannelsService } from '../_services/channels.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    channels: Channel[];
    newChannelForm = false;
    newChannel = {};

    constructor(private channelService: ChannelsService) { }

    ngOnInit() {
        this.getAll();
    }

    getAll(){
        this.loading = true;
        this.channelService.getAll().pipe(first()).subscribe(channels => {
            this.loading = false;
            this.channels = channels;
        });
    }

    addNew() {
        this.channelService.addNew(this.newChannel).pipe(first()).subscribe( res => {
           this.getAll();
           this.newChannelForm = false;
        });
    }

    deleteChannel(channel) {
        this.channelService.deleteById(channel.id).pipe(first()).subscribe( res => {
            this.getAll();
         });
    }

    updateChannel(channel){
        this.channelService.edit(channel).pipe(first()).subscribe( res => {
            this.getAll();
         });
    }

    openNewChannelForm() {
        this.newChannelForm = true;

    }
}

