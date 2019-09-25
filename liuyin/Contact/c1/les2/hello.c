#include <stdio.h>
int main(){
	int a1=10000;
	int count=0;
	int x,y=1;
	for(a1;a1<50000;){
		a1=a1-a1*0.5;
		count++;
		printf("%d",count);
	}
	for(count;x<5000;count++){
		x=x-5000*y;
		y++;
	}
printf ("%d",count);
}


