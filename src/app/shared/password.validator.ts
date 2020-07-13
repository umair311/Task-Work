import {AbstractControl} from '@angular/forms'
export function passwordvalidation(control:AbstractControl):{[key:string]:Boolean}|null{
const password=control.get('password');
const cpassword=control.get('cpassword');
if(password.pristine||cpassword.pristine)
{
    return null;
}
return password && cpassword && password.value !=cpassword.value?
{'misMatch':true}:
null;


}