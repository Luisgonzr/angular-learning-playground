import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  fileForm!: FormGroup;
  files: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFileForm();
  }

  initFileForm(){
    this.fileForm = this.fb.group({
      file: ['',[Validators.required]],
      fileSource: ['',[Validators.required]]
    });
  }

  get file(){
    return this.fileForm.get('file');
  }
  get fileSource(){
    return this.fileForm.get('fileSource');
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileForm.patchValue({
        file: 'a',
        fileSource: file
      });
    }
  }

  touched(){
    this.file?.markAsTouched();
  }

  clearFile(){
    this.fileForm.patchValue({
      file: undefined,
      fileSource: undefined
    });
  }

  uploadFile(){
    let formData = new FormData();
    formData.append("file", this.fileSource?.value);

    //Call API here
    alert('File uploaded successfully');

    console.log(formData.get("file"));
  }

}
