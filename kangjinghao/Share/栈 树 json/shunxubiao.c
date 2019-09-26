#include<stdio.h>
#define maxsize 1024
typedef int datatype;

typedef struct
{
    datatype data[maxsize];
    int length;


}  sequenlist;
void setNull(sequenlist *L)
{
	L->length=0;}
void reverse(sequenlist *L)
{
	int i,j;
	datatype t;
	for(i=0,j=L->length-1;i<j;i++,j--)
	{    t=L->data[i];L->data[i]=L->data[j];L->data[j]=t;}
}
void insert(sequenlist *L,int x)
{
	int i,k;
	i=0;


	while((i<=L->length-1)&&(x>=L->data[i])) i++;
	for(k=L->length-1;k>=i;k--) L->data[k+1]=L->data[k];
	L->data[i]=x;
	L->length++;
}
void main()
{
	sequenlist L1,L2;
	int i,x;
	datatype data;
	setNull(&L1);
	printf("请输入逆置顺序表的初始数据，以-1表示结束\n");
	scanf("%d",&data);
	while(data!=-1)
	{
	L1.data[L1.length]=data;
	L1.length++;
	scanf("%d",&data);
        }
        reverse(&L1);
        printf("逆置后的 顺序表如下\n");
        for(i=0;i<=L1.length-1;i++) printf("%d",L1.data[i]);
        printf("\n");
        setNull(&L2);
        printf("请输入非递减有序表的初始数据，以-1表示结束\n");
        scanf("%d",&data);
        while(data!=-1)
        {
		L2.data[L2.length]=data;
		L2.length++;
		scanf("%d",&data);
        }
        printf("请输入要插入的数据\n");
        scanf("%d",&x);
        insert(&L2,x);
        printf("逆置后的顺序表如下\n");
        for (i=0;i<=L2.length-1;i++)
        printf("%d",L2.data[i]);
        printf("\n");
}
