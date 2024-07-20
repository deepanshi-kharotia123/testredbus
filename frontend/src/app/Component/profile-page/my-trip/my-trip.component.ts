import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../../model/booking.model';
import { BusService } from '../../../service/bus.service';


@Component({
  selector: 'app-my-trip',
  templateUrl: './my-trip.component.html',
  styleUrls: ['./my-trip.component.css'],
})


export class MyTripComponent implements OnInit{
  @Input() booking: any=''; 
  bookingname: string = '';
  bookingemail: string = '';
  bookingphoneNumber: string = '';

  @Input() passenger: any='';

  //@Input() myBooking: any;
 // @Input() booking: any='';


  // bookingname: string = '';
  // bookingemail: string = '';
  // bookingphoneNumber: string = '';


  //booking:any=[]
 // public booking: Booking | null = null;
  //currentcustomer:any=[]
  constructor(private busbooking: BusService) {}
  imageArr = [
    {
      _id: { $oid: '6049b8a97501a24470b9a526' },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg',
    },
    // Other image objects...
    {
      _id: {
        $oid: '6049b8a97501a24470b9a527',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg',
    },
    {
      _id: {
        $oid: '6049b8a97501a24470b9a528',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg',
    },
    {
      _id: {
        $oid: '6049b8a97501a24470b9a529',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/10/411/ST/L/penRe7.jpeg',
    },
    {
      _id: {
        $oid: '6049b8a97501a24470b9a52a',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/19449/814/FR/DL/PuizKJ.jpeg',
    },
    {
      _id: {
        $oid: '6049b8a97501a24470b9a52b',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/450/OT/L/lejRej.jpeg',
    },
    {
      _id: {
        $oid: '6049b8a97501a24470b9a52c',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/54/ST/DL/11XMg2.jpeg',
    },
    {
      _id: {
        $oid: '6049b8a97501a24470b9a52d',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/16/OT/L/lejRej.jpeg',
    },
    {
      _id: {
        $oid: '6049b8a97501a24470b9a52e',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg',
    },
    {
      _id: {
        $oid: '6049d3567501a24470b9a533',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/4957/54/FR/L/lejRej.jpeg',
    },
    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bef',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg',
    },
    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bf0',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg',
    },
    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bf1',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg',
    },
    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bf2',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg',
    },
    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bf3',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/10/54/FR/L/lejRej.jpeg',
    },
    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bf4',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/420/SI/DL/RdzzBG.jpeg',
    },
    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bf6',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg',
    },

    {
      _id: {
        $oid: '604b8aedb3f0410d74d91bf8',
      },
      images:
        'https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg',
    },
  ];

  randomimage: string = '';
  ngOnInit() {
    const randomindex = Math.floor(Math.random() * this.imageArr.length);
    this.randomimage = this.imageArr[randomindex].images;
    this.getBookingDetails();
  }
  //  getrandomimage():string{
  //    return this.imageArr[Math.floor(Math.random()*(18-0+1)+0)].images
  //  }
  getBookingDetails(): void {
    // this.booking=sessionStorage.getItem('Loggedinuser')
    //const user = JSON.parse(this.booking);//(this.myBooking)
    // this.bookingname=user.name;
    // this.bookingemail = user.email;
    // this.bookingphoneNumber = user.phoneNumber;
    // this.busbooking.getbusmongo(user._id).subscribe((response: any) => {
    //   this.booking = response;// this.myBooking
    //   console.log(this.booking);//(this.myBooking)
    // });

    const bookingString = sessionStorage.getItem('Loggedinuser');
    if (bookingString) {
      const user = JSON.parse(bookingString); // Ensure bookingString is not null
      if (user) {
        this.bookingemail = user.email;
        this.bookingphoneNumber = user.phoneNumber;
        this.bookingname=user.name
        this.busbooking.getbusmongo(user._id).subscribe((response: any) => {
          this.booking = response;
          console.log(this.booking);
        });
      } else {
        console.error('User data could not be parsed');
      }
    } else {
      console.error('No logged in user found in session storage');
    }
  }

  }

