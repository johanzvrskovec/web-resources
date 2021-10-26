dob_entry = "11/09/2002"
var split_dob = dob_entry.split("/");	

dob= new Date(split_dob[2]+"-"+split_dob[1]+"-"+split_dob[0]);
today = new Date();
age_years = today.getFullYear() - dob.getFullYear();

// If your birthday hasn't occurred yet this year, subtract 1.
birthday=dob
birthday.setYear(today.getFullYear());
if(today < birthday)
{
  age_years-- ;
}

alert(age_years);