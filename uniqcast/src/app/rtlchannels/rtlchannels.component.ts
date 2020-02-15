import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rtlchannels',
  templateUrl: './rtlchannels.component.html',
  styleUrls: ['./rtlchannels.component.css']
})

@Injectable()

export class RtlchannelsComponent implements OnInit {

  items;
  constructor(private http: HttpClient) {
    this.getChannels().subscribe((data)=>{
      this.items = data;
      console.log(data);

    })

  }
  getChannels() {
    return this.http.get("http://176.31.182.158:3001/channels");
  }

  ngOnInit(): void {
  }

}
