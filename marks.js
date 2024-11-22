function getResult()
{
let hm,cs,jm,bm,tot,avg,grd;
  hm=+html.value;
  cs=+css.value;
  jm=+js.value;
  bm=+bs.value;
  tot=hm+cs+jm+bm;
  avg=tot/4;
  //subject checking
  if(hm>39&&cs>39&&jm>39&&bm>39)
  {
	grd= avg>=90?"A+": avg>=80?"A": avg>=70?"B+": avg>=60?"B": avg>=50?"C": "D"; 
  } 
  
  else
  {
	  grd="Fail";
      }
	  //displaying op
	  total.value="Total Marks     :"+tot;
	  Average.value="avg Marks    :"+avg;
	  grade.value="Grade    :"+grd;
}