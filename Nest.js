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




Services injectable, CLI, Constructor Injection

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


NestJS me import aur export ka matlab 🧠
1️⃣ imports — andar lana
Dusre module ki cheezen apne module me use karna
imports: [AuthModule]


➡️ Matlab:
AuthModule ke providers (services) is module me available ho jayen
📌 Example:
imports: [AuthModule]
Ab tum AuthService ko use kar sakte ho.

2️⃣ exports — bahar dena
Apne module ki cheezen dusre modules ko dena
exports: [CustomerService]

➡️ Matlab:
CustomerService ko dusre modules use kar sakte hain
📌 Example:

@Module({
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}


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

loose coopling
“Aik class doosri class pe depend karti hai,
lekin dependency injection ke through ho
to usay loose coupling kehte hain”


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




Environment Variables in Nest JS

ya important infomarion hoti hard cord nhi krty env ma rkhty hai securely 
db urls 3rd api key api key koi or na access kry unko environemnt varbale ma
store krty hai
sensitive infomration seculrely store krty hai ham

npm i @nestjs/conifg
ya enviormnet varible ki configgration krwaye ga net js k sath

roor diretcry ma 
.env
DATNASE=mongodb://localhost:500/modngodb
JWT_SECRET=12345


module.ts root wali ma
importsl ma
configModule.forRoot({
isGlobal:true)} global allow kr rhy enko kahi b use kr ksty hai ham

ak ev service bnaye ga ham
import {configureServise} from "@nest/config"
constructor (private configureService:configureService

geturlDb(){
return this.configureService.get<string>('env name )
}

ab contoller banye ga ham

service inject kry ga 
construtcur (private readonly eveService:EvService)

@get
getulr(){
return this.envservice.getDBurl();
}






MoongoDB 


Connection moongodb with NESTJS
ya apni moongodb install kro cpmass install kro

mongodb ny ak loud b diya apko kuch download nhu krna accor reigster kro altas
direct connect krly ga ap


cluster 
wo server hai jha data store krty hai ap cloud olatform hai server chaye data store krny k liya 
server chaye ya clutser hota hai ya cloud provider hota region wgira bataty hai ham


moongose use kry ga ham
npm i @nestjs/mongoose mongoose
en donu ko install kry ga

ya direct hardcode nhi kry ga ham env ma rkhy ga secure data store krwaye ga han

nest i @netsjs/config install kry ga

ab 
modul.ts ma
imports:[
configModule.forRoot(),
MoogooseModule.forRoot(proccess.env.MONGO_URI!) ya env ki integartion krwani globally apn
value rovde krni pori application ma
]


Moongodb schemema
schema db ka storucture hota apky document ka kis stiretre ma store krwana apny
ap ak structure baatye ga schema batay ega kya deifne kry ga wo sab

nest g module student

ab styduent folfer ma schema banye ga
student.schema.ts
import {Prop,Schema , SchemFactory} from "@nets/moongose"
import {Document } from 'Moongose"

export type StudentDocument=Student & Document en donu cheze kause krky ak type bnani hai
ya document ka use krkry bn rhi ak student class jo bany lagy hai nichy ham

moongodb ma data document ma store hota jo jo fields hai apky pass

@Schema({timestamps:true}) jab b data insert hoga do filed addd kry ga
ak created or ak updated field hoti hai

export class Student{
@Popr({}) jo schma define kr rhy kya kya properties hai apki kon c optional rkhni kon c lazmi hrkhi wo
batye ga props ma ham

@Propr({required:tue})
name:string;

@Prop({required:tue})
age:number

@Propr() prop ka mtlb proepry hai
email?:number ya optional hai agr na b mily field no ssue

}

export const StudentSchema=SchemaFactory.createForClass(student)
yha ham class ko moongo db schema ma convert kr rhy hai schame ka name studentSchema hai

moudle.ts
@Module({
imports:[
MonnogseModule.forFeature([{name:Student.name,schema:StudentSchema}]} name kya rhy ga schema ka
]dosra k konsa sturctiure apka 
apny moongodb ma ak schema banan sturndet rhy g konsa sturecre follow hoga wo 
stduentschema hai



Insert Data in MonngoDB 
nest g service student

ak schma deifnr kry ga ham

nest g contorleer stduent

service.ts
construtur(
@InjectModel(student.name) private studentModel:Model<StudentDocument>		ya nestmonogse ma milta eska kam schma register krwana
taky suse kr ksy ham intscbale{}

jab b ya run hoga consturture atomatically run hojaye ga

async createStudent(data:Partial<Student>): Promise <Student>
{
const newStudent=new this.studentModel(data);
return newStudent.save();
}

ya datasave kry ga moongodb ma save insert krta moongodb ma insert krta


contoer.js
constructire(pirvate readonly studentService:StudentService){}

@Post()
async addStudent(@Body() data:Partial<Student> ya sturture follow kro partial ma diya)
{
return this.stiudetnSerice.creaetStudent(data)
}


ab run kry ga application ham
ab tetsing kry ga postman k zariya ham



Read Data

get method use kry ga ham
spefic data get krna unique id dani
agr sari tu id nhi dani
 alida alida get methid banye ga ham

service.ts ma

async getAllStudent():Promise <Student[]> multiple data hoga return array
{
return this.studentModel.find().exec();ya promise ko ai sy hanlde kry ga agrna use kry ga issue a ksta hai
best pratcie hai eciuse use kry ga ham
}

async getStudentbyId(id:string):Promise<Student | null> ya student ya null id galti hoe exist nhi krta null return kry g
{
return this.student.findbyId(.exec();
}


contoler.ts

@Get(){
async getStudents(){
return this.studentService.getallStudent()
}}


@Gte(':id)
async getstude(@patram:id id:string)
return tsis.ervicetsudenr.getspaxificu(id)
}



Update Data in MongoDB

service.ts ma

async updateStudent(id:string,data:Partisal<Student>):Promise<Student | null>{
return this.studentModel.findByIdUpdate(id,data,{new true}).exec

}agr id data mil jata wrana null return kry ga 

controler.ts ma
@Put(":id')
async updateStudent(
@Param('id) id:string
@Body() data:Parartial<Student>,
)
{
return this.studentService.updateStudent(id,data);
}



Patch Update 

server.ts

async patchStudent(id:string,data:Partial<Student>): Promise<Studebnt | null>
{
return this.studentModel.findByIdAndUpdate(id,data ,{new:true}}.execu()l
}

put jab apny completely data update krna hai paritally update krna 
usky liya Patch use krty hai



Delete Mongodb

id dy ga ham delete hojaye ga student

service.ts
async deleteStudent(id: string):Promise<Student | null>{
return this.studentModel.findByIdAndDelete(id).exec()
}



contorler 

@Delete(':id')
async deleteStudent(@Param('id) id:string){
return this.studetnService.deletreStudent(id);
}



 Data Relationships In MongoDB
2 techniques sotre data in db

Embedding
jitna b related data ak document ma store krna address wagira 
embedding ka mtlb es sab ko ak docment ma store krna searching fast hojati hai queries b related
data ak document ma store hoti

Referencing
jab data zayda hojata data increase hota wha embedding use nhi krty chota data ma embedding krty hai wha alg alg docment ma nhi store krty data 
jab data zyada hn 

sabko alg lag document ma sotre krwana or link krwana
es sy strutred rhy ga query slow hogi thori lakin agr data update krna hai apko yha problem nhi hogi
link k liya ids use krty

data relationship types
One to one relationship
one to many
many to many

one to many 
ak author multiple books likh skta hai
many many
multiple course ma multiple students or multiple students multiple courses ma envolve hoskty hai


pros  embdiing
single document 
data reterival fast
small data k liya
cons
document size baara hoga problem
data update krty waqt problem


pros rerfencing
document small
updation easy
manage large data

cons
data retervial slow hogi thori



One to One relationship

ak record ak sy link hoga ids 
nest g module employee
nest g service employee
nest g contoroler employee

schemas folder name
profile.schema.ts
employee.schema.ts

profile.schema.ts

import {prop,schema,schemaFactory} from @nestjs/mongo
import {Docuemnt} from "moongose"

@Schema(
export class profile extends Docuemnt{
@Prop()
age:number;

@Prop()
qualification:string

}
register krwana hai

export const ProfileSchema=SchemafACTORY.CREATEfACTORY(Profile)

employee.ts


import {prop,schema,schemaFactory} from @nestjs/mongo
import {Docuemnt,Schema as MoongoseSchema} from "moongose"
import Profile from "//profile/chsm

@Schema()
export class Employee extends Docuemnt{
@Prop(
name:string;

@Prop({type:MoongoseSchema.Types.ObjectId,ref'Profile'})
profile:profile;
}

export const employeeSchema=SchemafACTORY.CREATEfACTORY(Employye)



module.ts
@Moule([
imports:[
moongoseModule.forFeature([
{name:Employee.name, schema:EmployeeSchema},
{name:Profile.name, schema:ProfileSchema},
]

employee.service.ts

constructor(
@InhjectModel(Emplyee.name)private eployeeMode:Model<Employee>;inject kry use kr sky
@InhjectModel(Profile.name)private ProfielModel:Model<Profile>;inject kry use kr sky
){}

async createEmplyee():Promise <Employee> {
const profile=await new this.profileModel()
age:20,
qualification:'Masters',}).save()

const emplyee=new this.employeeModel({
name:'Farzeen'
profile:profile._id
);


async findall():Promise<Employee[]>{
return this.employeeModel.find().populate('Profile').exec();

}
agr populate use na kry sorf ak docuemnt return kry ga id return kry ga prifle ki
agr populte use kry ga mujhe dosry document ka data b reutrn krna sirf id nhi dani mujhe


controler.ts

constructor(private readonly employree)

create(_)
get()


One to Many Relationship

same one to one wala folder structure

schema
tag.schema.ts

import {Props,Schema} form "nest"

@Schema()
export class Tag{
@Prop()
name:string;
}


product.ts

import {Props,Schema} form "nest"

@Schema()
export class Product extends Document{
@Prop()
title:string;

@Prop({type:[Tag]}){
tags:Tag[]
}


export const ProductSchema=SchemaFacotry.createForClass(Product)


module.ts

@Module({
imports:[MongooseModule.forFeature([{
name:Product.name,
schema:ProduceSchema
)])


service.ts

constructor(@injectModel(Product.name) pricate productModel:Model<Product>){}

async createProduct():Promise<Product>
cnst prodcy=new this.ProductModel{
title:'Gaming Laptop',
tages:[
{name:'electronics'}
{name:'gaming'},
}

return product.save();

}

async getAllProcduts(): Promise<Product[]>
{
return this.productModel.find();
}



contorler.ts

constrictor(private readonly productservice:ProductService);

methid and call


one to Many Relationship Referncing

nest g module library
nest g service library
nest g controller library

schemas
book.schema.ts
library.schema.ts


book.schema.ts

import {Prop,schema,schemaFactory} from "nestjs/moongio"
imoort {docuemnt}

@schema()
export class Book extends Document{
@Popr()
title:string

@Props()
author:stirng



library.ts

import {Prop,schema,schemaFactory} from "nestjs/moongio"
import {docuemnt,types}

export class library extends docuemnt{

@Prop()
name:string;

@Prop({type:[type:Types.objectId,ref:'Book"}])
books:Type.ojectId[];

}

export const libarrayschema=schemafactoy.createforclass(library)



moduel.ts

imports;[
MoongoseModule.Feature([
{name:Library.name,schema: LibrarySchema},
{name:Book.name,schema:BookSchema}
]


service.ts

constircyire({
@injectModel(Book.name) PRIVATE bookModel:Model<Book>,
constircyire({
@injectModel(Library.name) PRIVATE LibraryModel:Model<Book>,

){}

async createLibrary():Promise<Library>{
const Book1=await this.bookModel.create({
title:'JS ka Badshah,author:"No define"
const Book2=await this.bookModel.create({
title:'JS ka Badshah,author:"No define"'

const library=new this.libraruModel({
name:'Central Library',
books:[book1._id,book2._id];
})

return library.save();

async getLibrary():Prmise <Library[]>{
return this.libraryModel.find().populate().execu()


agr find use kry ga sirf book ki id aye ga ham chlaty hai id nhi chaye us id sy related data wo b aye sath

ab contoler ma wohi kam






Many To Many Relationship

many to many embedding k sath nhi kr ksty hai
one to one mebedding k sath implement kr ksty hai
one to many ma bhut kam krty hai embedding  sath
many to many k sath nhi kr ksty embdedding k sath  kyo k alg alg document kasy bnaaye ga
duplication krny pry ga update krna muskhil hojaye ga


2 student k sath embed krwa diya
kr ksty hai update nhi kr skty problem data bhut bara hojaye ga


kuch ma kr ksty one to many ma embedding ma lakin zya tr
referncing ma agr updatenhi krna zayda dpilication nhi kr skty hai


contolrer service generate kry ga ham

schema.ts

import {Props,Schema,SchemFactory} from "
import {Document}

@Schema({timestamps:true:})
export class Project extends Dpocuemnt{
@Props({required:true})\
title:string,

@Props({type:[{type:Rtpes.ObjectId,ref:'Project'}))
developers:Types.ObjectId
}

export const DeveloperSchema=Shema.createForClass(Dveloper)


module.ts

imports:[
Moongose.Module.forDynamic(
{name:Dveeloiper.name,
scgem:developer.checma})


product.servicd.ts ma

@injectMdel(Devekiper.name) private developer.Model:Mode<Develoepr>
@injectMdelprojectr.name) private project.Model:Mode<Develoepr>


async seed():Promise<{deve1:Developer; dev2:Deeverloper}>{

const [ProjeftA,Projet]=await Promise.all([
this.projectMode.create([ttiel:'Nest CRM')
this.projectMode.create([ttiel:'Mongo CRM')
]);

const [dev1,deve2]=await Prmoiuse.all[([
this.developerModek.create({
name:'Farzen",
projecrs:[ProjecrA._id,ProjecrB._id],

many to many
project k andr develoepr li detail developer k dandr project kid etail hoig
await Prmisoe.all({
this.projefcyModel.findtByIdAndUpdate({
(projectA._id,{
@set:{develoepr:[dev1.._id,dev._id]}
})
(projectB._id,{
@set:{develoepr:[dev1.._id,dev._id]}
})

return {dev1,dev2}
}


asynf get()
return thisprojectModel.find.().populate('devewlopers).lean();




@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Developer.name)
    private developerModel: Model<Developer>,

    @InjectModel(Project.name)
    private projectModel: Model<Project>,
  ) {}

  async seed(): Promise<{ dev1: Developer; dev2: Developer }> {
    const [projectA, projectB] = await Promise.all([
      this.projectModel.create({ title: 'Nest CRM' }),
      this.projectModel.create({ title: 'Mongo CRM' }),
    ]);

    const [dev1, dev2] = await Promise.all([
      this.developerModel.create({
        name: 'Farzen',
        projects: [projectA._id, projectB._id],
      }),
      this.developerModel.create({
        name: 'Ali',
        projects: [projectA._id],
      }),
    ]);

    await Promise.all([
      this.projectModel.findByIdAndUpdate(projectA._id, {
        $set: { developers: [dev1._id, dev2._id] },
      }),
      this.projectModel.findByIdAndUpdate(projectB._id, {
        $set: { developers: [dev1._id] },
      }),
    ]);

    return { dev1, dev2 };
  }

  async getProjects() {
    return this.projectModel
      .find()
      .populate('developers')
      .lean();
  }
}






 PostgreSQL & TypeORM Explained 


open source relational database hai ya
stability speed or data accubicay ki waja sy
ya powerfull database hai

why use postgSQL
ya free hai mongodb open source nhi hai
postgress free hai join indexes trigers sabko sport krta hai

secure application bari application scability flexibilty chaye apko
ap easilty es database ko use kr ksty hai

psotrgress 
sql + nosql hybrid hai 

mysql hota hamyt pas tales joins milty
ya b postgresql ma b milty hai
yha nosql k festure miljaty json full tsxt search ki b mil jat
dosry ma ya nhi mitli suppoert apko
bari bair coponies use kr rhi esko

TypeORM
objection relation mapper hai typescript k liya ya NestJS 
ya object ornednted ma convert krta nestks ko
class ki form ma data defie krty
ya safe hoti query type safe likhnan easy bana deta clean mangeable banata hai




 Connect Supabase PostgreSQL with NestJS | TypeORM Setup 2025

postgress ka market ma chal rha
supbase
ap manualyy instakll kry enviment use kro

ajkal jo chlal rha wo supabase hai
jasy firebase backend as a sevrice paltform hai supabase b 
athnethcation database storage ya powerfull dtabase deta with ostgress 
jasy firebase nosql deta ya postgress deta supabase provide krta hai

supabae ma an singup login krna

databse banye ga ham password b dey ga yad rkhna hai
project banye ga ham

eski confirgaton krwani nestjs k sath 
project setting ma aye ga m
phr databse ma aye ga ham

connect click pr kry ga side pr likha hoga ipv4 use kr rhy hoty 
pc ya ipv6 k sath coompitale hai

nichye hoga ipv4 wala wo lygy connection string 
nestjs ma env ma dyga ya 
sirf your-password ma apna likhna databse ka password


npm i nest/config
envormnnt k liya

TypeOrm i krna hai
postrgress install kry ga ham

npm i @nestjs/typeorm typeorm pg
ya install kry ga postgress drver hai pg ka

module baey ga ham
nest g module user

user.entitiy.ts banye ga ak
impor t{Entitiy,PrimaryGneeratetedColum,colum} form "typerom

@Entitiy apki class ko enentiy ma convert kiya jaye

export class User{
@PrimaryGeneratedColumn()
id:number

@Column()
name:string
}

ya shme abnana liya

mdule.ts ma enetiy register krwaye ga

imports :[TypeOrmModule.forFeature([User])]

app.modue.ts ma
imports[confifureModule.forROute(),TypeOrmModelus.fprRoot([
type:'postgres',
url:process.env.DATABASE_URL,
autoloadEntities:true
synchronize:true
})]
nestjs es enentoiy ko create krdy ga supabase ma

type run kry ga ham temrinal ma application run kry ga ham
ab supabase m create hojaye ga table


ab folder ma employees.enentity schema banay k liya ham


import {Enitity,PrimaryGeneratedColumn,Column} form "typeorm

@Enoitity ya batye ga esko enenty treat krna
expport class Employee{

@PrimaryGneeratedColumn() unique id gnerate hogi
id:number

@Column()
name:string;

@Column()
posiion:string;

@Column()
department:string;


emptyess.service.ts

constrictor( @InjectRepository(Employee)
private employeRepositiory:Repositiotur()<Employee>
)reporty batata pa crud apply kr ksty esky opr koi b kam crud ka

async create(employeeData: Partial<Emplyee>:Prmoise<Employee>{
const emplyee=this.employeeRepositiory.create(employeeData);
return this.employeeRepoisity.save(employee);
}


contoler.ts
construcot(Private readonly employeeService:EmployeeService){}

@Post
async createEmployee(@Body() body: Partial<Employee>):Prmoise<eMPLOYEE>{
{
return this.employeeSerivce.create(body);
}



Fetch Data from Supabase PostgreSQL

service.ts
async findAll():Prmoise<Employee[]>
{
returun this.employeeReposityr.find();
} get all data

async findOne(id:number):Prmoise<Employee>{

const employee=awat this.employeeRespository.findOneBy({id})
if(!employee){
throw new NotFoundExpection(`Employee woth ID${ID})
}

return employee;
}


contolrer.ts

@Get()
async findAll():Prmoise<Employee>{
return this.employeeService.findAll();
}

@Get(':id')
async findAll(@Param ('id) id:number):Prmoise<Employee>{
return this.employeeService.findAll();
}




Update Data in Supabase PostgreSQL | PUT API with TypeORM 2025 

service.ts
async updateData(id:number updateData: Partial<Employee>):Prmoise<Employee>){

const employee =await this.employeeRepositiry.findOneBy({
id)}
if(!emplotee){
thorw new not expection(Employee not found);
}

const updated=Object.assign(employee,updatedData);
return this.emplyeeRespiorty.save(updated)



contoler.ts
@Put(':id')
async updateEmplyee(){
@Param('id) id :number,@Body () body:Partial<Employee>,)}
:Prmoise<Employee>{
return this.employeeService.update(id,body)
}


Deleete data Supabase

service.ts
async delete(id:number): Promise<{messae:string}>{
const result=await this.emplyeeRespostory.delete(id);

if(result.effected==0){
return notExpecrunFound();
}

return {message:`Employee with ID $ deleted successfully!`}
}

@Delete(':id)
async deleteEmployee(@Param('id) id:number):Prmoise<{message:string}>
{
reutrn this.emplyeeServce.delete(id):
}





Filter & Search Data Using @Query()
jab b data acess krna filter laga kr query paramater lagty hai

emplotess.service.ts ma

async search(filters:{name?:string;department?:string}):Promise<Employee[]>{
const quey=this.employeeRepository.createQueryBuilder('employee)(filter k liya querybuilder usw krty ham)

if(filters.name){
query.andWhere('employee.name ILIKE :name', {name:`%{filtera.name}%) (i like cacsecentive hota hai inore kry ga)
pory name kahi b ali arha percentage ma amtlb eska
agr percentage na use kry first ko compare kry ga

if(filters.deaprtement){
query.andWhere('employee.name :name', {name:`%${filtera.name}%) 

return query;

}
a

ab contoler ma route banye ga ham

async search(){
@Query('name) name?:string,
@Query('department') department?:string):Prmie<Employee[]>{
return this.employeeService.search({name,depatyment})

agr :id opr rkha query agr nichy rkhy tu wo asumen id wala kry ga
error aye ga error handling use krkry r ksty
ap id wly ko nicy rkhan esko opr confuse nhi hoga ya



JWT Token Explained | Authentication vs Authorization


Authentication ma user sy credeitials laty agr mily tu thek nhi 
Authorization  login k ad kin chezo ko wo access kr ksta kis ko nhi wo dekhty hai

JWT(JSON WEB TOKEN)
eska use authentaion k liya ya secure file hoti jo server or user k darmyn dat excnage krny k liya use hoti
es my user ki secure information hoti es screure file ma store krty hai

server or user k darmyan data exchnage krna hamny
server ko nhi yad rhta ap kon hai dobara crendetials dn 
apko bar bar server sy request krni pri tu es problem ko solve krta hai
jab user aya server token bnan deta hi ap 
ny koi b reuqets krni ap header ma wo token dyda ga wo server ;lyga wo lyga pehnchan lyga 
apko response krdy ga apko credentiual dany ki zarorat nhi hogi





Supabase JWT Authentication with Login API 
supabase token dy ga us ka use krky verify kry ga ham

env ma
SUPABASE_JWT_SECRET=
supabase ma jana project setting ma
wha jwt keys nazt aye gi legagacy jwt secret hoga wo copy krna 
env ma paste kr dena

main.module.ts ma
configure.forRoot){
isGlobal:true: enoment varible ko kahi b use kr ksy ham)}

nest g guard auth/supabase -auth
ya check krty ap athenticate user hai ya nhi

supabase-auth
import * as JWT from 'jsonwebtoken'
import {Request} from 'express';

constructor(private configureService:ConfigureService){}
canActivate(
contet:ExcutionContext,):boolean | Prmoise<bollean> | observable<bollena>{
const request=context.switchToHtpp().getRequest<Requets>;
const authHeader=request.headers['authorization'];
if(!authHeader || !authHeader.startWith('bearer')} statndar keyword hota tken k liya user kryty 
throw new UnauthorizedExpection('No token provide')
}
const token=authHeader.spilt(' ')[1];
const JWTSecret=this.configureService.get<string>('SUPABASE_JWT_SECRET;);
if(!JWTSecret){
JWTSecret throw new UnauthorizedExpection('JWT Scestre njot provide');
}
try{
const decode=jwt.verify(tojen,jwtsecret);
request['user]=decode;
return tue;
}
catch(error){
throw new UnauthorizedExpection('Invalid Token');
}

cotoler.ts
@UseGuard(supabaseAithGuard);
@Get()
ab autorezed hona lazmi user ka 

supabase ma authentication ma akr user bnaye ga ham
project setting ma jaye ga ProjectID hogi 
postmane ma
https:projectid.supabase.co/auth/v1/token?grant_type=password
body ma aye ga 
information dyga ham



What is GraphQL? GraphQL Vs REST API
esko facebook ny develope kiya tha 2012 or 12015 ma opensource krdiya tha
modern appprocash hai api handle krny k liya

ya ak query language hai api k liya use krti hai
ya help krta jo data chaye wohi aye na zayda ya kam

why develop facebook kyo kiya.
jab rets api thi phr esko banaya hi kyo need kyo hoe

esliy develop kiya restapi major issue face krny pry
overfaecting and underfechting 

overfetchin
user k data sy sirf user chaye rest ma sara data ajata tha

underfechting
jab user name chaye orderid chaye 
rspapi ma multipple endpoint ma kam krti thi hamy extra netowkr sever pr rquest 
krny prti apki application ma effect ata tha

ya singleednpoint pr kam krta multiple pr nhi
agr get krna user agr 1 ko get/1 krtty thy 

apki application ki performace sai krta hai
resapi multipe endpoint por kam krta tha

respai ma akser jab user ka name chaye sevrer proi profile ka adata bhj deta tha
ya overfetching
jab data milta tha mulrtiel request krni prti thi ak request su nhiarha tha
ya underfecthing thi

esi problem ko graphql ny solve kiya

resapi ma ahr resource k liya alg endpoint hota hai
grpahql maak end point hotha hai
respai verisoning ka use krta tha v1 v2  pornay dlelete nhi hoti api v1/v2
versinoing ka use krty thy
grpahql ma nhi hoti ham query k zariya new data define krty hai

graphql wha use krty jha complex requets krni hoti fetchin k liya complex query krni
har jaga nhi use hoti 



add previouse text





















Prisma ORM & Neon DB Explained 

ak modern orm hai sab sy zayda chla rha hai wo prisma
jo chezy typeorm ma complex hoti wo prisma easy krky deta hai
typeorm ma b kr skty jen chezo ma wha time lgta wo easy bana di prisma ny ya backend code ko d sy connect krta typeorm sy secure way provide krta hai


why use prisma
atotmatically type generate krta typeorm ma krna rta es sy bugs kam hojaty hai auto complete hota buit in milti chezy 


what is NeonDB
neondb ak freee servdvelss db hai cloud ma hota firebas b deta noen ak free serverless db hai postgress k luya singup krna or db url ln or save kro


why prisma+noeonDB perfect
combo mana jata hai prisma+noeondb or nestjs best combo hai



Build Full CRUD App with GraphQL, Prisma & Neon DB

npm i @nestjs/graphql @nestjs/apollo grpahql apollo-server-express

prisma install
npm i prisma --save-dev development depency mtlb save ka
npm i @pisma/client tbale create krny k liya use krty ya
npx prisma init (inlizie hoga prisma app ma )


nenon ma account bnaye ga 
connect kry ga
.env ma jaye ga connect kry ga

schema.prisma

model Book{
id string @id @default(uuid())
title String
author String
createdAt DateTime @default(now())
)

ak command run kry ga db sy connect k liya
npx prisma db push

npx prisma generate

nest g module prisma
nest g service prisma
nest g controller prisma


nest g module book
nest g service book
nest g resolver book


ak dto folder bnaaye ga 
valitdation k liya
create two files

create-book.input.ts
update-book.input.ts


prisma.service.ts
import {PrismaClient} from 'generated/prisma

@Injectable()
export class PrismaService extends PrismaClient implemts OnModelueInit,OnModuelDestory{
async onModeulInit(){
await this.$connect();
}
async OnModuelDestory(){
await this.$disount();
}


app.moudle.ts

imports:[GraphQLModuel.forRoot(<ApploDriverConfig>)({
driver:ApolloServer,
autoSchemaFile:join(process.cwd(),'src/schema/gql;
sortSchema:true,
palyground:true)}) yha grpahql ka chemahoga


create-book.input.ts

import {InputType,Field} from @nest/grpahql
@InputType
export class CreateBookInput{
@Field()
titile:stirng;

@Field()
author:string

}


UPDATE-BOOK.INPUT.TS

export class updatedBook extends PartilaType(createdBookInput){
@Field()
id:stirng
}


prisma.module.ts

exports:[PrismaService]

book-module.ts

imports:[prismaModuel]


book.model.ts
import {ObjectType,Field} from "@nestjs/grpahql}

@ObjectType()
export class Book {
@Field()
id: stirng
@Field()
title: stirng
@Field()
author: stirng
@Field()
createdAt: date
}
ya api handle k liya response ma dena es liya essy zayda return krny k liya nhi kr skty ham

model
ya model api handle krny k liya


book.service.ts

constructor (private prisma:PrismaService){}

create(data:cretedBookInput){
return this.prisma.book.create({data});
}

findAll(){
return this.prisma.book.findMany()
}

ffindAll(id:string){
return this.prisma.book.findUniqe({
where:{
id})}

update(data:UpdatedBookInput){
return this.prisma.book.update({
where:{id:data.id},
data:{
titiel:data.title,
author:data.author
}

remove(id:stirng){
return this.prisma.book.delete({where:{id}})
}



resolver.ts
constructor (private readonly bookService:BookServie){}

@Query(()=>[Book]) multiple book return kr skta
getAllBooks(){
return this.bookService.findAll();
}

@Query(()=>Book)
getBook(@Args('id) id:string){
return this.bookSerivde.findOne(id)
}

@Mutation()=>Book)
createBook(@Args('input')input:creaeBookInput){
return this.bookService.create(input)
}

@Mutation()=>Book)
updateBook(@Args('input')input:creaeBookInput){
return this.bookService.update(input)
}

@Mutation()=>Book)
deleteBook(@Args('id')id:string){
return this.bookService.remove(input)
}



ab run application
localhost300/graphql

mutation{
createBook(input:{
totole:
author:})
{
id
titile
}ya reutn kya ena apny


queyry({
id,
titile
author
}



mutation{
updateBook(input:{
id:id dn
totole:
author:})
{
id
titile
}ya reutn kya ena apny





: Implement Rate Limiting Using Throttler 
kitny time ma kitni dfa geenarte kr skta otp
password apply kr skty time duration dy skty limit lagaty hai

nestjs thortler
npm sy pacage install kry ga ham



moduel.ts ma\imports:[
THortlerModuel.forRoot:[
throttlers:[
name:'defualt'
ttl:second(60) kitny rime am krhan
limit:3 aak mint ma 3 dfa request kr skty hai ham
],\errorMessage:'Too many request please wait a mint a again!'
})

providers:[AppService,{
provide:AppGuard gurd apply kry ga ya
useClass:ThrottlerGuard 
})
gaurd ka concept apply kry ga ya 3 sy dfa reuqets tu nhi ki tu kam nhi kry ga message show krwaye ga ya


cotnorler.ts

@Get()
@Throttle({default:{limit:3 ttl:60000}})
getHello():string{
return 'this is a limit route'
}



Command / Library	Use
@nestjs/graphql	NestJS me GraphQL enable karne ke liye
@nestjs/apollo	Apollo GraphQL integration NestJS ke liye
graphql	Core GraphQL functionality (schema, queries, mutations)
apollo-server-express	GraphQL server Express ke upar run karne ke liye
prisma --save-dev	Prisma CLI install (development dependency)
@prisma/client	Prisma runtime client for DB queries
npx prisma init	Prisma setup + schema file create
npx prisma generate	Generate Prisma client for app use
npx prisma db push	Create/update tables in DB based on schema
npx prisma migrate dev --name init	Create + apply migration files for DB










