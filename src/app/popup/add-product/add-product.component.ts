import { Component, OnInit, Inject } from '@angular/core';
import { ProductModel } from 'src/app/model/productModel';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public tiltSettings:string;
  public thumbnailUrl:string;
  public product = new ProductModel();
  public message: string;
  public form: FormGroup;
  private acceptedFileTypes: string[] = [".jpg", ".jpeg", ".png", ".tiff", ".img"];
  
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      thumbnailUrl: ['', [
        Validators.required,
      ]],
      name: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
      creationDate: ['', [
        Validators.required,
      ]],
      price: [null, [
        Validators.required,
      ]]
    });
  }

  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get creationDate() {
    return this.form.get('creationDate');
  }
  get price() {
    return this.form.get('price');
  }

  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.acceptedFileTypes = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.product.thumbnailUrl = reader.result;
    }
  }

  addProduct() {
    this.dialogRef.close(this.product);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
