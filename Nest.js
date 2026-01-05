Nest.js

Nest.js vs Express.js
nestjs nodejs ka framework hai sevrer side application bnanany k liya
ya js ka rn enviornemnt hai kahi b run kr ksty hai

ya ts ka use krky build krky angular sy aspired hai 
angular ko follow kiya kuch chezo ko
ya module arcticture use krta ya provide krta code ko orginize kr sky

nest.js ny simple bnaa diya module archotecture k sath
ya hmay ak strurctire provide krta easy bana skta application
ya limitations ko solve krta jo expreess.js ma hai


differnce hai 
express.js hai unopinonated hai yha pr structure nhi hota 
ma ak file ma kam kro ham kis name sy file banane kitny folder bana skty
jes tara code likh ksty marzi sy
flexibility milti hai lakin agr hamry pas bara project jaye tu ak structure follw krna hota
muskhil hojata har ak ka tariqa code likhny ka alg hai smjhna muskhil hojata har ak k liya
ya unopininated hai 

ya b nodejs ka framework hai ya oponiainated framewrork hai ya scabbility deta
har koi asani sy code smjh skta hai eska
ham nes.js ko follow kry ga ya stirture deta jesko follow krty ham

express.js ma bulitin nhi milti middlware milta base esmy nest.js ma bhut luch milta builting
graohql restfull ma krna hn builtin mil jata hai

aponinated or unponintaed express.js
large project k liya best hai 

benefits
aponinated framewrok hai
full supports typescript fully hai support  krta js b likh ksty
express..js ma optional hoti ts use krskty nhi b 
built in dependecy milta databaese websoclets graphql sy 
scabale or maintaibe rhta structure follow krty hai


install
npm i -g @nestjs/cli
yha cli ka mtlb command line interface hai ya tool hai esmy ya use krky fast developemt krsktyhai
ya frmaewrok ya bhut sari commands provide kry ga agr file banani hai ham command hogi usko run kry ga
kis folder ma banan kya code likhna commnd manage kry gi install ma b ak command hogoi
manually kam krny ki zarorat hai cli ka mtlb hai eska

ya cli ka tool hai command ka use krky framwreok ko control kr rhy hogy ham

nest new nameproject
npm run start
hamy har luch banany ki zaroroate nhi nest.js ny khud bana di hai cli ki power hai ya



Folder Structure Explained

dist folder atomatically bnta jab ham build krty hai project kry ga 
hamara nest.js ya typescript ma likhta hai ya dist ma complied rkhta hai ts ko hmary project ma bhut sari chez
development side hoti jo development krty waqt unki need hoti prodctire ma nhi hoti limited lykr jaye 
wo jaye jeski zarorat hn run krny k liya application esmy comlied version hota hai ya developers k liya edit nhi hota
ya atomatically generate hota

node modules
esky andr bhut chey hoti esky andr wo sary packages hoty jo application ma use hprhy haoty hai
har cheeze ka yh module ma milta hai
kuch b install krygy ndoemodules ma mily ga 

src
jitni b development krty esmy krty source code likhy wo cource code ma krty hai modules bnaye controleers banaye 
development side ka src ma krty hai
esmy 
app.contoller.spec.ts
ya testing k liya hoti file unit testing ktrni hn kr ksty hai
app.contoler.ts ya file controller ki file hoti hai
enka kam request lena or response dena 
app.contoiler.ts k name sy bnaye gi conriler ki
app.module.ts ma module bnty hai module based kam hai nest js ma import ka use krty contolerr ka use krty hai
kya kya controller rhny waly providers rhny waly yha ham register krty hai ya root module hota sab yha register hota hai

app.service.ts ma controleer ka kam es service ko call krna requets recive krky esko call krta hai logic k liya 
yha likhty hai

main.ts 
ya nest.js ka entry point hai ya file excute hogi jo app ko regitser krdu jasy server.js bnty 
ya loclhost define hota yaha


test dectroy hai
testing krni hai koi b ham yha kr ksty hai controller k andr kisi k andr b 

.gitingnore
yha ham un files or folder ma likhty hai
ya github pr push na hn files folder hoti jasy env file hoti hai yha likh ksty hai


.prettierc
ya tool hai indendentation thek krna ya code fomrating ko sai krti hai

.eslint.config.mjs
ya batat hai agr nest.js k standard ko follow kro

nest.cli.json
jab b koi command run krty esko read krta hai 
nest cli tool provide krta hai command ka use kr ky kam krty hai 
jab b nes.js ma koi command run krty ya dekhti hai esfile ko 

tsconfig.build.json
ya buld k waqt use hpoti hai 

tsconfig.json
ya khta typescipt ko kasy comlie krna hai

package.json ma infogmration hoti name lisence scripts kon use hporhi command kon c use horhi ha

dependencies vs devDependencies farqi
📦 dependencies

Ye packages app chalne ke liye zaroori hoti hain.
Production (real server) par bhi ye install hoti hain.

🛠 devDependencies

Ye packages sirf development ke time use hoti hain.
Coding, testing, debugging ke liye.

Production me usually install nahi hoti.

package.lock.json
application ki detail package.json ma hai
enki b detail or ak ak package ka excate information sari 
package.json.lock ma milti hai
application k andr dependoces excat ak ak cheeze ki detail milti hai 
ak ak chez hoti hai uski 



Controllers

ak asi jga hai jha http request land hoti contolers k pas ati hai hanlde krta hai
jab ap browser sy data bhjty server ko tu ham http request bhjty hai wo http k zariya bhjty hai
jo client request kry ga wo sabsy phly conrolers pr land krta hai
contolers bridge hota communciation krwata client or server k darmyan
controlers handle kry ga listen kry ga requets ko user ki need kya hai
bussines logic jo b hogi wo servrvice ko dyga 

api endpoints clearly 
spearte hojaye ga routing or business logic
scable maintabible code rhy ga


Decorators
nest.js ma ak aisy special function hoty jo class function ko special 
behiviour dety k esky pas kya special power hai wo decroators battay hai mtadata add krty hai
ya @ sy start hoty hai
ya special function hota add metadata esko decorators khty hai
@controler
@get()
estara method decorators hoty hai

ham nest cli tool ka use krky contoler ko create kry ga
nest g(mtlb generate pora b likh skty) contorller user(end ma name)

ya user k name sy file banye ga or testing file b bana dy ga
naming conversional b khud kry ga hamy nhi krna pry ga

ya gnerate k mtlb module ma register krna hoga hmy
ya atomaticaly module file ma register hojaye ga

ya contoler simple fucntion nhi ya special function hota hai 

@contoler('user) ya route hai base hai es route pr aye ga ya code excute hoga ya
export class useContoler{
@Get()
getUser(){ya special method hai get metadata provide kr rha hai
return 'user data fetch successfully'
}}
jab user get requetd kry ga tab ya return kry ga
agr chnage kryga ham hamny command start ki start ki

ham start:dev kry ga ya wath k sath run hogi
ham kisi b file ma chnage kry gi wo auto refresh hojaye gi
npm run start:dev




Services Explained | Injectable, CLI, Constructor Injection

ak asi ts ki type hai jha ham logic likhty hai
calculatons data fecth krna db sy koi b resuable logic likh
skty hai ham
contorlers sy hat kr kam krna contolers ma http route handle krty 
ham us k elwa jo logic wala part hai es tara ki logic ko ham service sy krty
readble maintainable code hojata hai

injectable likhty ya atomaticaly provide kry ga
agr user /user pr ata hai ya injectable krwata hai service pr 
service k sath 

services ko reuse kr ksty hai ak logic ko mutiple jaga use kr sty hai controlers k sath
apki application organize scable hojaye gi har chez alg hai

ham ak folder bnaye phr file name likhy [hr boilerplayte code khud likhy
ya cli use kry
nest g service(ya s b likh ksty) product

jab b servise bnaye ga injectbale use kry ga esko conrtoler ma inject kr ksy 
agr hata dy nest.kjs atomaticaly nhi inject kry ga esko

@injectbale
export class productService{
private products=[{
id:1,name:Mobile,price:2000
}]

getAllProducts(){
return this.products;
}
getProductById(id:number){
return this.prodducts.find(product)=>{ product.id===id}
}
}

controler.js
@contoler('produt)
class
constructur(private readonly productService:ProductService)
{
}
@Get()
getProducts(){
return this.prductService.getAllProduct() call krdu jab route pr yae es pr

@Get(':id')
getProduct(@Param('id) id:string){ jo route k andr id dynamic wo retur kyr
return this.productService.getProductById(Number(id)) id datatype chnage kr rhy
}
}

ya return kry ga 

2️⃣ productService: ProductService

👉 Tum keh rahe ho:

Mujhe ProductService ka object chahiye

NestJS khud hi ye object bana ke de deta hai
(isay Dependency Injection kehte hain




Modules 
ya cointer hota jha ham kuch chezo ko manage krty hai
yha ham relative contorlers ko manage krty hai unko module khty ha
a continer where we keep related contorlers,service adn providers for our application
ya bhut important hai part ya na kry jitni b features hai sabky mix horhy hogy proiverds services
achi practice nhi hai maintbiit scability nhi rhy gi

ak module bnaye ga ak features k sy realtes jo hai unko module k andr manage kry ga
scablity mainbtibliy resubaility increacse hjati hai
har feature ko alida define kry ga us module ma manage krty hai 
every nest.js ma ak module lazmi hota hai
wo parent module hota hai jitni b new bnrty unko module ma resgister krwaty ha
directy b kr ksty lkain har feature ko har moduel ma kro phr yha register krdi

nest g module employee
nest g service employee
nest g controller employee

jab b module bnaye wo import hojana chaye app.module.ts ma 



Architecture Explained
nest.js arcticture kya hai
nest.js arcticyure modular scable and maintibale.
ham har spearte feature k liya module bnaye ga hamrsa code moduler form ma jaye ga
module ma services contorlers ajaye ga hamry code scability easy rhta hai
ya arctiture moduler ma hojata hai har modular ma define krna har feature har feature ka
alg service and contolrer hota

clint(User)
ya fronted ka part hai ak request generate hogi koi b
ak endpoint ki request trigger ki jati hai wha jao ya la kr dn

contoler
ya request controler k pass jati hai
ya receptionist k pas aye ga ya hai
recive kry ga request ko http ki
ya us rewuets k accroding service k pas bhj dyga
logic wala part service k pass hota ya bridge ka kam recive krna listen krna 
esko pata hoga kis service k pas bhjna request ko

Service
esmy bussnes logic likhty hai ya ts ki class hoti jo b logic handle krna yha krty hai

Provider
koi b asi class jesko ham inject ya resubale krwa sky
service class ya custom b hoskti 
asi class jo inject hn ya reusbale hoksy enko module ma register krty hai ham

Module
ya type of continser hai jha group krwaty hai services controlers ko
hamri application orgnazise hoiajti hai features ko moudle ma convert krty hai


Dependency Injection
nest.js ma jo apko atomotaic service provide krta jab zarorat hn apko
yha hamy object nhi banan prta class ka ya nest.js khud kr rha hota hai


Decorators
ya special function hoty start @ sy hoty hai ya btaty hai k kis class kis methid ko
kasy treat krna hai 



Dependency Injection
kisi clas ka dosri class ma depend hona
injection ka mtlb atomaitcally provide krna do class aps ma inject hai
nest.js atomaticaly dependicy ko provide kry ga 
ya required dependcy provide krta hai apko manually nhi krna prta wo khud provide krdy ga

ak contorller banaya uska object khud inject kry ga nest,js 
ak clas dosri class ma depend hai tu ya loosely coopling hoti
@injectbale ka mtlb dependcy inject eska use krty es class ko khi inject krwaye ga
ak service function ko contoler ma dpeencyd inject use kiya hai
contoler fle ma constructur(privaye readonly category:categoryService) ya depnedcy
inject r rhy ya atomatcally inject krdy ga hmy manually nhi krna pry ga



API
appliation progaming interface
do application k darmyan talk krny k liya
rest statless hai ak requets bhji khtm resposne k bad 
simple scable and stateless communiction hai ya 


service,js
@injectable()
export class StudentService(){
private students=[
{id:1,name:'Farzeen',age:23},
{id:1,name:'Farzeen',age:23},
{id:1,name:'Farzeen',age:23},
]

getallStudent(){}
getStudentById(id:number){
const student=this.student.find(s)=>s.id===id);
if (!student) throw new noFoundExpection('Student not found) 404 error return kry ga
return srudent;
}

//POST
createStudent(data:{name:string; age:number}){
const newStudent={
id:Date.now()
...data];
}
this.student.push(newStudent);
return newStudent
}

//PUT
updateStudent(id:numer,data;{name:string,age:number}{
const index=this.sudent.findIndex(s)=>{s.id===id}
if (index===-1) return throw new NotFoundException('Student not found)
thsi.student[index]={id,...data}
return this.students.[Index]
}


//PATCH

patchStudent(id:number,data:Partial<{name:string,age:number}>(partial ka mtlb optional bana deta jai)
const student=this.getStudentById(id);
Object.assign(student,data); copy bnaye ga sirf change update kry ga
return stuent;

//DELETE

deleteStudent(id:number){
const index=this.sudent.findIndex(s)=>{s.id===id}
if (index===-1) return throw new NotFoundException('Student not found)
const deleted=this.student.splice(index,1)
}


@contorleer(student)
export class studentContorler{
constructir(private readonly studentService:StudentService){};

@Get()
getAll(){
reutrn this.studentService.getllStudent();
}

Get(':id')
getOne(@Param(:id):string{
return this.studentService.getStudentById(Number(id))
}

@Post()
createStudent(@Body() body:{name:string,age:number})jab request kry gy body ma data arha hopga
retirn thos.studentService.createStudent(body)
}


@Put('id')
update(@Param(;id):string,@Body() body:{name:string;age:number}){
return this.stidentService.updateStudent(Number(id),body);
}

@Patch('id')
update(@Param(;id):string,@Body() body:Partial<{name:string;age:number})>{
return this.stidentService.patchStudent(Number(id),body);
}

@delete(;id)
remove(@Param(;id)id:string){
return this.studentService.rmeoveStudent()
}




Data Transfer Object (DTO) & Interfaces Explained 

ya ak aisa object hota hai jo security or validation provide krta hai
ak layer hai clinet backend ki data ko clinet ys backend ma send krna 
jab fomr submit kry ga backend ma dto create hoga check kry ga amny define ki hogi phhly
name email password hn bas ya check kry ga ya dto sy kryga 
ya incoming data ko validate kry ga
esko phly structure batya hoga yhi data rhy koi extra data na aye security or validation
hoti hai ya object hota lyer check krta hai

Interface
ak role ko define kran ak structure define krna object ka 
student ka stircture banan uska interface deifne krdy ga 
infuture jinty b objects bnaye wo es interface ko follow kry ga 
clean krta typesafe krta hai dto k sath krty kafi jga use kr ksty hai

ak contorleer module service gnerate kry ga ham
best prcatice
ak dto bnaye ga module ma
ak file name create-customer.dtos.ts estra extension rkhy ga 

ak directory interfaces rkhy ga 
customer.interface.ts
koi b dekhy usko pata lg jaye kya kiya hai usny

dto create
export class CreateCustomerDTO{
name:string,
age:number
}


interface ma
export interface Customer{ template bata rhy
name:string,
id:number,
age:number}

service ma
@injecable
export class custonermService{
private custonmers:Customer(ya interface hai)[]=[]


getAllCustomers():Customer[]{
return this.Customers
}
yha validate krwana data esky liya hamny dto bnaya hai
addCustomer(createCustomerDTO:CreateCustomerDTO):customer phla parmater name hai incoming data arha wo validate krwa ry ham
{
Customer{
const Customer:Customer={
id:Date.now(),
...createCustomerDto (ya object hai emsy values arhi hogi jo dto ma diya 
};
this.customer.push(newCustomer);
return newCustomer;
}}}


controller ma
export class customercontorller{
constructor(private readonly customerService:CustomerService){}

@Get()
getCustomer(){
return this.Customersservice.getCustomer;
}

@Post()
addCustomer(@Body() createCustomerDto:CreateCustomerDTO){
return this.customerService.addCustomer(createCustomerDto);
}
}


✅ Sahi baat (FINAL TRUTH)

👉 Interface runtime par data validate nahi karta
👉 Interface sirf compile time par TypeScript ko batata hai




Validate DTOs Using class-validator & class-transformer
nest js by default dto apply nhi krta
npm run start 
kry ga ham
ab 3 feilds send kry ga postman sy tu ya send hoijaye ga

ya jo ts ka use krky dto ki class bna e typescript complie time pr
help krti validation k liya
jab development kr rhy hoty ap
runtime ma ts ki type remove hojati hai 
frontend sy data arha ts apply nhi hota runtime pr ts ki types class ko remove kr deta hai
by dfeault ya strict validation apply nhi krta

runtime pr apply kry ga phr apply hogi 

npm i class-validator class-transformer (ya package use kry ga 2 ham)
yha hamy decoraters mil jaty ya ts ki proeprty ko validate krta hai
jo data arha wo expected type ka hai ya nhi
class transfer ya plain json ko class instanses ma convert krny k liya 
jab b fronted sy data arha ata ya json ma hota ya json data ko class validator ma
convert krna class validator chly 


ab dto file ma

export class CreateCustomerDto{
@IsStroing() ya runtime pr remove nhi kry ga nestJS ya nestJs ka part hai ts ka nhi
name:string
@IsInt()
age:number

main.tsx ma aye ga
yha pr dto pr globally validation aplly kry ga ham
app.UseGlobalPipes(new ValidatationPipe({
whiteList:true,(ya remove kryga propersties jo dto ma define nhi
forBidNonWhitelisted:true ya error dyga jo unnon field mily gi esko
}
}
ab runtime ma ts ki type remove hogi tu ya issue solve hojaye gi

runtime pr ts ki classes remove kr deta ya complie time pr help krti runtime pr remove krdiya jata



Pipes

Create & Use Custom Pipes in NestJS 

incoming requets ma data recive horha unko transform kr skty hai ya validate kr skty hai
transform mtlb use sy phlt modification ya validate kr skty hai ham
dto ma structure defi e krty ya ya hona chaye
dto ka nestjs ma apply nhi hota us problem ko solve krty hai validation 
pipe ka glgobally apply krty jo dto rules define kiya ya us rules ka use krta
incoming data ko validate krta hai
bulitn in pipes ka use kr ky kr rhy thy

ham apny b pipes b bana skty hai 
somethie aisa hota asi validation transfomration apply 
krna chaty hai wo avaivble nhi ham customr pipe bnaty hai
ham logic khud define krty hai 
ham khud ka pipe b bana ksty hai jo validationapply krwani jo 
logic likhna likh ksty hai wo use kr ksty apni appliction ma

hamry pipe hoty apka data corntoler k pas jany sy phly pipe run hojaty hai
contoler sy phly excute hojata ha
phly pipe k pas jaye ga jo logic hoga wo apply hoga phr contoler k pas aye ga

yo can apply method level contoroler level or globally b apply kr ksty hai
built in nhi milta support ham khd pipe bnaty hai

create
nest g pipe uppercase
es command ko run kro ga ak uppercase folder ma file aye gi
src directory ma module bana rhy clena structure rkhna chaty hai
sperate directory bana skty hai
best practice hai structure krna hcaty pipes ko ham
kisis spesfic folder k andr ban kr aye ya

nest g pipe common/pipes/uppercase

customepipe pipeTrsnfomr ka use kr ky implment krts hai

class k andr
if(typesof vlaue==='string'){
return valuess.toUpperCase() ya transform krky data contolers ko dyga 
}
return value.toUpperCase();

nest g contorller myname
contoler banye ga ham

@Post ('custom')
transformName(@Body('name',new upperCasePipe(ya pipe hai import hpga yha use call krna ya methid ecxute sy phly 
custom pipe run hoga phr data return kry ga yha recive hioga name:string){}
return {message:`Recive name:${name}




Protect Routes using Guards in Nest JS 

ap routes ko protect krty hai ham spesicfic routes hoty har user k liya aviable nhi hoty
ak authneticate user usko access kr skta hai user login nhi usko acccess nhi kr skta
agr admin nhi wo usko access nhi kr ksta hai
sirf authorizae user hi access kr sky ga routes ko


Guards
routes protect k liya gurads use krty hai 
classes hoti hai logic implemnt krty k es request ko allow krna hai ya nhi
2 chezo sy kr skty hai routes protect
authentication(user login hai ya nhi user credintail deta check krty hai)
authorization(andr k bad kya features allow hai usko user hai user kry ga user admin
waly nhi kr skta wo)


gaurds contoler sy phly escute hoty hai gurard check kry ga authentcaitons
private routes ko strict krny k liya ham guards ka use kry ga ham
duplication sy bachta hai guards ko mulitple use kr skty hai contorlers ma

nest g guard guards/auth
canActivate interface eska use krky krty ham guard generate
canactivaet run hota phly method cotnorler sy phly run hota logic batya hai yha ham

const request=context.switcchToHttp.getRequest();jo b requets i hai user ki wo ajye gi varable ma
const authHeader=request.headers['authorization'] authornaztion mil rha ya nhi yha
return authHeader==='Bearer' my-secret-token;


contolers ma
@Get()
@useGuards(authGuard) name hai andr 
phly guard excute hoga check kry ga tokne arha hai ya nhi




Role Based Access
nest g gaurds/auth
roles folder or
roles.decorater.ts
import {setMetaData} from '@nest.js/common'
exportconst key=
export const Roles=(...roles:string[]))=>setMetadata(Roles) roles key value pair bny ga hamry 
koi b role mil skta user admin wagira 
ctornoler ma se kry ga provide kry gaesko decrotr banaya hai hamy
enum ma aye ga constnat value define krni hn esky elawa koi values na aye

roles.enum.ts
export consy Role{
User='user',
Admin='Admin'
}


guard ma aye ga ham
constructor (private reflector:Reflector) eska kam metadata set krwa rhy ya reflector get krta hai
canActive(
const requiredRoles=this.Reflector.getAllAndOverride<Role[]>
Roles_Key,[
constex.getHandler(),
constex.getClass(),
])

if (!requiredRoles)return true;

cons request =cinstext.switchToHtpp.getRequest<{headers:Record<string>}
user jo request kr rha header searc kry ga jo data rha hoga usko store kry ga
const userRole=request.headers[x-user-role] as Role
return required.inlcude(userRole)


contolrerr bana kr call kry gahma




Exception Filters in NestJS 

error expection handle krny k liya use krty 
pori application ki error handling ak jga manage kry ham 
buit in expection hai throw k sath notfound wagra
nestjs hamy provide krta k custom expection use kr ksty bana skty message wagira b 
bana skty hai custome filter bana kr kry ga ham define message expections wagira
kisis b contoler globaly service ma use kr ksty hai esko

ak custom filter banye ga

nest g filter filters/http-execption

ab file ma aye ga
const ctx=host.swrwitchtoHtpp();bata rhy http protocol pr kam kr rhy request response ko access krna hamny
const response=ctx.getResponse<Response>() express sy import krwana express sy response ki
const request =ctx.getRequest<Request> 
const status=exception.getStatus()(jo code arha code status code wo get kry ga)

response.status(status).json({
statusCode:status,
timestamp:new Date().toISOString() month date year aye ga time ka
path:requets.url(path kis sy aye hai ya exection)
message:expection.message
})
http expection ko catc ktky ya logic apply kry ga ya custom filter hia apnana

ab comtoler banaye ga ham

contoler.js
@Get('hello/:id')
@UseFilters(HttpExpectionFilter) ya dectortor andr name jo banaya
getHello(@param(id,ParseIntPipe(){ check kry ga integrer hn nhi hai expection throw kry ga custom
return {Message:'Your ID Is :${id}`}
}




Middleware in Nest JS 
middlware aisa function hota jo cotneroler k pas pochny sy phly excute sy xcute hojaye gi
middlware runs before the request reacth the contoler
contoler k pas ponchny sy phly excute hojata hai

loogin incoming request dekhan
token validate krna check krna
request transfomration (convert krna string ma number)
request ko block krna redirect krwana
setting headers 

Middlware vs Guard
guard NESTJS ka featire hai 
middlware express.js ka concpet hai 
guard advance feature hai express ma nhi 
nestjs nodejs k opr bana hai

middlware ma decrotors use nhi kr ksty hai
ya NESTJS ka part hai decoraters wagoira
middlware express ka guard ka nest ak concpet hai node expres ma use nhi kr ksty hai

guard route sy phly excute hopta hai role check kr skty hai

middlware ma sirf express js ka code likhty na ka nestjs ka ya uska feature hai express ka
before contoler 
custom taska loggon token decode 

nest g middleware middleware/logger

middlware.js

import {Request,Response,NextFunction} from 'express'
requets ka kam kya requets i get krna usko response ka mtlbyha sy kya retuen krna
next ka mtlb kha agy bhjna esko contoler k pas kha 

use(req:Request,res:Resonse,next:NextFunction){
console.log("[${request.method}]-[${req.url}]')
next() agr na kry tu ya function excute hojaye ga next nhi jaye ga ya

}


module.st ma
configure(consumer :MiddlewareCustomer){
consumer.apply(LoggerMiddleware).forRoutes('*') consumer ka mtlb konsa middlware
apply krna kin routes pr name bata ya for routes ka mtlb * all routes k liya krna apply ya
}



Life Cycle Events in Nest JS

nest js ma special methods wo lif cycle
hooks kaya hotiu nestjs ma loifecyle events hoty 
lifecyclemethos b lifecyle events hai

ya spesiacl method hoty atomoatic call hojaty hai jab b apki application
apki moudle start ya close hoti hai
har nestjs k stages hpty hai un event k triger pr call krta hai atomtomatic

dosry methoid bnaty hai unko call krwana hota hai usko import krky
ya atomatic call hojaty hai ya har jga call nhi krna hota ya atomatic call 
hojata hai

useful
ya events esiya use hotu cusotm code chla skty bina code ko call krwana method ko
ya nestjs khud mnagae kr leta hai ya easy hojtata
ap custome code likhty nestjs ma ya atomatically call krwa ly ga
jasy hi application load hn db sy connect krwana
ya ham lifecycle method ma likh skty hai jab applciation inzilatize hogi

jab b application bnd hai resoureces ko close krwana hai 
event close pr call krwaye ga ya ham khud call hoga

onduleIne called innizled
onModuleDistory() destory sy phly module
afterModuleUnit inztize k bad module kkr ksty hai
onApplicationBootstrap() jab complete load hogi db sy connect krwana hai
onApplicationShutDown(0 resousreces free krwa aconnctions wagira close krwana kr ksty hai



Life Cycle Hooks

ab ak service contoler banye g
nest g service database
nest g contoller databaase

service/.ts
private isConnwcted=false

onModuleInit(){
ya lifecycle call hogi service load k bad
this.connected=true;
console.log("database is connected')
}
ya atomatclay call hota service load k bad ya jo hai jha likh rhy ham

onApplicationShutdown(signla:stirng){ jab b applciation close hoti signla ma ata signal ma ata
contrl c sy hoe close ya sserver sy hoe reason es paramter ma pass kiya jata singla k
jab application shutdown hogi ya call hoga
this.connectipn=false
console.log(shutdon.singnal ${signal})
getStatus(){
return this.connected ?'Conected ':'discounted
}}

imprtant
lifecycle events ,method hooke start on sy hota hai

main.ts ma batan hoga ya lifecyle shotrdonw run hn

app.enbaleshutdownHooke() bata rhy ya use horhy enable krwa dn shitdown hooks ko

ab contoelr ma
constructor (prvate readonly databaseService: DatabaseService:){}

@Get(stratus)
getStatius(){
return status:thos.databaseServioce.getStatus();
}




