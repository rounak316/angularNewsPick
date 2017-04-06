export class MenuService
{


constructor()
{
    console.log('Initializing menuItem')
}

getMenuItems()
{
return this.menu

}


menu =  [

{
type: 'logo',
text: 'Brand',
state: true

}

,

{
type: 'items',
text: 'Brand',
items:[

{
       type: 'tab' ,
state: null,
    text: 'item 1'

}
,
{
       type: 'tab' ,
state: 'active',
    text: 'item 2'

}
,
{
    type: 'tab' ,
state: null,
    text: 'item 3'

}


,

{
state: null ,
text :'dropdown',
type: 'dropdown' ,

items:[

{
state: null,
    text: 'item 1'

}
,
{
state: 'active',
    text: 'item 2'

}
,
{
state: null,
    text: 'item 3'

}

]

}


,

{
state: null ,
text :'dropdown',
type: 'dropdown' ,

items:[

{
state: null,
    text: 'item 1'

}
,
{
state: 'active',
    text: 'item 2'

}
,
{
state: null,
    text: 'item 3'

}

]

}
]

}

]


}