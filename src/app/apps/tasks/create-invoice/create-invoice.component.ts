import { Component, OnInit } from '@angular/core';

// constants
import { EventType } from 'src/app/core/constants/events';

// services
import { EventService } from 'src/app/core/service/event.service';

// types
import { Invoice } from './invoice.model';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  invoiceData!: Invoice;
  public tempItem: any = {};
  printInvoiceFlag: boolean = false;

  constructor(private eventService: EventService) { }




  ngOnInit(): void {
    this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
      title: "Create Invoice",
      breadCrumbItems: [{ label: 'Invoice', path: '.' }, { label: 'Create Invoice', path: '.', active: true }]
    });








    this.invoiceData = {
      invoice_id: '2016-04-23654789',
      customer: 'Stanley Jones',
      notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.',
      order_date: ' Jan 17, 2023',
      order_status: '',
      order_id: '#123456',
      sellerAddress: {
        owner: 'MANORMA INDUSTRIES',
        line_1: 'M-92, MIDC Nangaon Peth',
        city: 'Amravati',
        state: 'Maharashtra',
        zip: 444602,
        phone: '8975575369',
        email: 'manoramaindutry@gmail.com'
      },
      address: {
        owner: 'Twitter, Inc.',
        line_1: '795 Folsom Ave, Suite 600',
        city: 'San Francisco',
        state: 'CA',
        zip: 94107,
        phone: '(123) 456-7890',
        email: ''
      },
      items: [],
      sub_total: 0,
      cgst: 0,
      sgst: 0,
      total: 0,
    };


  }

  addProduct() {
    console.log(this.tempItem);
    this.invoiceData.items?.push(this.tempItem)
    this.tempItem = {}

    this.calculateSubTotal()
    this.calculateCGSTnSGST()
    this.calculateTotal()
  }

  onChange(event: any) {
    let qty = event.target.value
    let ucost = this.tempItem.unit_cost
    this.tempItem.total = ucost * qty
  }

  calculateSubTotal() {
    let sub_total = 0
    this.invoiceData.items?.forEach(item => {
      if (item.total != undefined) {
        sub_total = sub_total + item.total
      }
    });
    this.invoiceData.sub_total = sub_total
  }


  calculateCGSTnSGST() {
    let cgst = (2.5 / 100) * this.invoiceData.sub_total
    this.invoiceData.cgst = cgst

    let sgst = (2.5 / 100) * this.invoiceData.sub_total
    this.invoiceData.sgst = sgst
  }

  calculateTotal() {
    this.invoiceData.total = this.invoiceData.sub_total + this.invoiceData.cgst + this.invoiceData.sgst
  }


  createInvoice(){
    // this.printInvoiceFlag = true
    this.printInvoiceFlag = !this.printInvoiceFlag
  }





















}
