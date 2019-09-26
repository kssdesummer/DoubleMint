#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#define maxsize 1024
typedef char datatype;

typedef  struct  node 
{
    datatype data;
    struct  node*lchild,*rchild;
}  bitree;

bitree   *CREATREE()   //建立二叉树函数，函数返回指向根节点的指针
{
    char ch;                        //节点信息变量
    bitree *Q[maxsize];//设置指针类型数组构成队列
    int  front,  rear;         //队头和队尾指针变量
    bitree *root, *s;         //根节点指针和中间指针变量
    root=NULL;;                //二叉树置空
    front=1;rear=0;          //设置队列指针变量初值
    printf("请输入二叉树的各结点，@表示虚节点，#表示结束：\n");
    scanf("%c",&ch);
    while(ch!='#')             //输入一个字符，当不是结束符时执行以下操作
    {
        putchar(ch);
        s=NULL;
        if(ch!='@')               //表示虚节点，当不是虚节点时建立新节点
        {
            s=(bitree *)malloc(sizeof(bitree));
            s->data=ch;
            s->lchild=NULL;
            s->rchild=NULL;
        }
        rear++;                     //队尾指针加1，指向新节点地址应存放的单元
        Q[rear]=s;               //将新节点地址入队或虚节点指针NULL入队
        if(rear==1) root=s; //输入的第一个节点作为根节点
        else
        {
            if (s && Q[front]) //孩子和双亲节点都不是虚节点
            if(rear%2==0)   Q[front]->lchild=s;  //rear为偶数，新节点是左孩子
            else Q[front]->rchild=s; //rear为奇数且不等于1，新节点是右孩子
            if(rear%2==1) front++;   //节点*Q[front]的两个孩子处理完毕，出队列
        }
        scanf("%c",&ch);
    }
    return root;                          //返回根指针
}

void preorder(bitree *p)   //先序遍历二叉树，p指向二叉树的根节点
{
    if(p!=NULL)                        //二叉树非空，，则执行以下操作
    {
        printf("%c",p->data);  //访问p所指节点
        preorder(p->lchild);     //先序遍历左子树
        preorder(p->rchild);    //先序遍历右子树 
    }
    return;
}

void inorder(bitree  *p)   //中序遍历二叉树，p指向 二叉树根节点
{
    if(p!=NULL)
    {
        inorder(p->lchild);
        printf("%c",p->data);
        inorder(p->rchild);
    }
    return;
}

void postorder(bitree *p)  //后序遍历二叉树，p指向二叉树根节点
{
    if(p!=NULL)
    {
        postorder(p->lchild);
        postorder(p->rchild);
        printf("%c",p->data);
    }
    return;
}

void main()
{
    bitree *root;
    root = CREATREE();
    printf("\n先序遍历结果如下：\n");
    preorder(root);
    printf("\n中序遍历结果如下：\n");
    inorder(root);
    printf("\n后序遍历结果如下：\n");
    postorder(root);
    printf("\n");
}

