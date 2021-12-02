/*
Data file for our mapping information
*/

var facilities = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

"features": [
{ "type": "Feature", "properties": { "id": 1, "Name": "Nyayo National Stadium", "Type": "Stadium" }, "geometry": { "type": "Point", "coordinates": [ 36.824651976610632, -1.304041431869004 ] } },
{ "type": "Feature", "properties": { "id": 2, "Name": "City Stadium", "Type": "Stadium" }, "geometry": { "type": "Point", "coordinates": [ 36.844839076716774, -1.295415294504487 ] } },
{ "type": "Feature", "properties": { "id": 3, "Name": "Moi International Sports Center", "Type": "Sports Center" }, "geometry": { "type": "Point", "coordinates": [ 36.892295041885667, -1.230067295034204 ] } },
{ "type": "Feature", "properties": { "id": 4, "Name": "KCB Sports Complex", "Type": "Sports Complex" }, "geometry": { "type": "Point", "coordinates": [ 36.857944411866328, -1.255524116507429 ] } },
{ "type": "Feature", "properties": { "id": 5, "Name": "Nairobi Gymkhana", "Type": "Stadium" }, "geometry": { "type": "Point", "coordinates": [ 36.827450087764454, -1.269918173907887 ] } },
{ "type": "Feature", "properties": { "id": 6, "Name": "Smart Gyms Junction", "Type": "Gym" }, "geometry": { "type": "Point", "coordinates": [ 36.761709738074025, -1.297653210329079 ] } },
{ "type": "Feature", "properties": { "id": 7, "Name": "Zarnash Gym", "Type": "Gym" }, "geometry": { "type": "Point", "coordinates": [ 36.769646198801219, -1.277028707014992 ] } },
{ "type": "Feature", "properties": { "id": 8, "Name": "Premier Fitness Center", "Type": "Fitness Center" }, "geometry": { "type": "Point", "coordinates": [ 36.818440169849119, -1.284479995634741 ] } },
{ "type": "Feature", "properties": { "id": 9, "Name": "Urban Fitness Gym", "Type": "Gym" }, "geometry": { "type": "Point", "coordinates": [ 36.77571555626762, -1.309102153191283 ] } },
{ "type": "Feature", "properties": { "id": 10, "Name": "Royal Nairobi Golf Club", "Type": "Golf Club" }, "geometry": { "type": "Point", "coordinates": [ 36.797082950533195, -1.302434205680074 ] } },
{ "type": "Feature", "properties": { "id": 11, "Name": "Muthaiga Golf Club", "Type": "Golf Club" }, "geometry": { "type": "Point", "coordinates": [ 36.845190112479663, -1.253891428650011 ] } }
]
}
var routes = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

"features": [
{ "type": "Feature", "properties": { "id": 1, "Name": "Karura Forest", "Distance": 6.900000 }, "geometry": { "type": "LineString", "coordinates": [ [ 36.844159634538052, -1.239930421993304 ], [ 36.826541195325454, -1.232240156378568 ], [ 36.823408124149076, -1.244609684139837 ], [ 36.828372210948011, -1.248597229273404 ], [ 36.829389441849429, -1.248353093857063 ], [ 36.830528740459016, -1.247946201496495 ], [ 36.831017011291699, -1.247457930663814 ], [ 36.831790106776779, -1.247010349067189 ], [ 36.832603891497918, -1.247010349067189 ], [ 36.833417676219049, -1.247010349067189 ], [ 36.834434907120475, -1.247010349067189 ], [ 36.835167313369496, -1.2473765521917 ], [ 36.835859030382458, -1.247864823024382 ], [ 36.837283153644449, -1.248597229273404 ], [ 36.839276926211234, -1.243511074766303 ], [ 36.840497603292938, -1.246725524414791 ], [ 36.842979646692399, -1.245667604277314 ], [ 36.844078256065934, -1.244650373375894 ], [ 36.844688594606787, -1.243877277890814 ] ] } },
{ "type": "Feature", "properties": { "id": 2, "Name": "Mbagathi-Nyayo", "Distance": 7.680000 }, "geometry": { "type": "LineString", "coordinates": [ [ 36.802107309073328, -1.301071085323164 ], [ 36.803002472266584, -1.300338679074141 ], [ 36.803165229210812, -1.299118001992437 ], [ 36.802921093794467, -1.297897324910733 ], [ 36.805199691013648, -1.297409054078051 ], [ 36.807396909760719, -1.296839404773256 ], [ 36.809024479202989, -1.295700106163665 ], [ 36.809614473125805, -1.295394936893239 ], [ 36.810591014791171, -1.295476315365353 ], [ 36.81158790107456, -1.295455970747324 ], [ 36.812564442739927, -1.295333903039154 ], [ 36.813500295169227, -1.295049078386756 ], [ 36.814192012182197, -1.294682875262245 ], [ 36.814558215306704, -1.294255638283648 ], [ 36.814924418431218, -1.293930124395194 ], [ 36.815656824680239, -1.293706333596881 ], [ 36.816531643255459, -1.293523232034626 ], [ 36.817406461830686, -1.293360475090399 ], [ 36.818220246551817, -1.2932180627642 ], [ 36.819176443599154, -1.292953582729831 ], [ 36.820071606792403, -1.292750136549547 ], [ 36.820661600715226, -1.293258752000257 ], [ 36.821271939256079, -1.29423529366562 ], [ 36.821780554706791, -1.295211835330983 ], [ 36.822614684045952, -1.296351133940574 ], [ 36.823225022586804, -1.297531121786221 ], [ 36.823733638037517, -1.298548352687642 ], [ 36.823977773453855, -1.299280758936664 ], [ 36.823916739599774, -1.299606272825119 ], [ 36.823876050363715, -1.300053854421743 ], [ 36.823815016509634, -1.300806605288794 ], [ 36.823896394981745, -1.301945903898385 ], [ 36.823957428835833, -1.302291762404868 ], [ 36.823855705745686, -1.303044513271919 ], [ 36.82344881338512, -1.304071916482353 ], [ 36.822533305573842, -1.304824667349404 ], [ 36.821210905401998, -1.305821553632796 ], [ 36.820214019118602, -1.306472581409704 ], [ 36.81960368057775, -1.306879473770272 ], [ 36.819237477453242, -1.307815326199579 ], [ 36.818505071204221, -1.309442895641852 ], [ 36.817731975719141, -1.310460126543272 ], [ 36.817121637178289, -1.311050120466095 ], [ 36.816023027804754, -1.312474243728084 ], [ 36.814720972250939, -1.313003203796822 ], [ 36.81227961808753, -1.313857677754015 ], [ 36.809634817743834, -1.314590084003038 ], [ 36.808210694481843, -1.314549394766981 ], [ 36.807152774344367, -1.313857677754015 ], [ 36.80609485420689, -1.311823215951175 ], [ 36.804345217056451, -1.308283252414233 ], [ 36.803246607682915, -1.305923276722938 ], [ 36.802676958378122, -1.303400544087416 ], [ 36.80214799830938, -1.301081257632178 ] ] } },
{ "type": "Feature", "properties": { "id": 3, "Name": "Gigiri", "Distance": 6.490000 }, "geometry": { "type": "LineString", "coordinates": [ [ 36.801615890602442, -1.218643435362432 ], [ 36.802633385567468, -1.218317910599064 ], [ 36.803854379525497, -1.218317910599064 ], [ 36.805075373483533, -1.218643435362432 ], [ 36.80580796985835, -1.219009650674201 ], [ 36.806703365427573, -1.21929448477112 ], [ 36.807883659587006, -1.219416556517728 ], [ 36.808941854350635, -1.219864152874579 ], [ 36.809593051128253, -1.220433820857419 ], [ 36.81044774689888, -1.220759345364868 ], [ 36.8113838422667, -1.221125560388643 ], [ 36.812279237835924, -1.221003488719589 ], [ 36.81321533320375, -1.220393130291209 ], [ 36.813988629377171, -1.2203524397244 ], [ 36.814802625349195, -1.220433820857419 ], [ 36.81435492756458, -1.222549729451098 ], [ 36.814232828168777, -1.224950469874392 ], [ 36.814314227765983, -1.226374636905923 ], [ 36.81427352796738, -1.227513969985542 ], [ 36.813785130384169, -1.228571921696247 ], [ 36.813256033002354, -1.23040299097453 ], [ 36.812767635419142, -1.231420251141729 ], [ 36.812482736828933, -1.232396820536998 ], [ 36.812604836224736, -1.233169937720989 ], [ 36.812279237835924, -1.23406512575873 ], [ 36.812075738842921, -1.235082384526789 ], [ 36.811139643475094, -1.236791378380382 ], [ 36.810488446697477, -1.238378300259054 ], [ 36.809837249919859, -1.238052777899816 ], [ 36.80869765555903, -1.237320352445432 ], [ 36.806662665628977, -1.236343784858372 ], [ 36.805075373483533, -1.235367216912087 ], [ 36.803935779122703, -1.234878932804324 ], [ 36.803488081338088, -1.234146506474486 ], [ 36.803121783150679, -1.232803724346026 ], [ 36.803325282143682, -1.23146094154035 ], [ 36.804139278115706, -1.22975194426392 ], [ 36.805034673684929, -1.227473279526784 ], [ 36.804993973886333, -1.226578089277145 ], [ 36.804627675698917, -1.225194612847867 ], [ 36.804220677712905, -1.224258731328772 ], [ 36.803528781136691, -1.223526302085927 ], [ 36.802185687782853, -1.222834563172966 ], [ 36.801656590401038, -1.222224205160538 ], [ 36.801371691810829, -1.220759345364868 ], [ 36.801615890602442, -1.22010829631057 ], [ 36.801656590401038, -1.218684125955093 ] ] } },
{ "type": "Feature", "properties": { "id": 4, "Name": "Magadi Road", "Distance": 5.180000 }, "geometry": { "type": "LineString", "coordinates": [ [ 36.768404854943924, -1.371961042834779 ], [ 36.757904306904834, -1.373222374564634 ], [ 36.758596203481055, -1.378878015096446 ], [ 36.756317014759389, -1.379203519179059 ], [ 36.755828617176178, -1.378389758889069 ], [ 36.755625118183175, -1.377779438489066 ], [ 36.75517742039856, -1.373588567522853 ], [ 36.75700891133561, -1.373303750782424 ], [ 36.756317014759389, -1.368380484625453 ], [ 36.756846112141204, -1.368217731852479 ], [ 36.760671893209711, -1.368014290870721 ], [ 36.764131376090802, -1.367810849871712 ], [ 36.767712958367696, -1.368136355461844 ], [ 36.767428059777494, -1.369194248324692 ], [ 36.767509459374693, -1.369885947251847 ], [ 36.768119956353715, -1.370943839342393 ], [ 36.768486254541124, -1.371879666571303 ] ] } },
{ "type": "Feature", "properties": { "id": 5, "Name": "BuruBuru", "Distance": 3.470000 }, "geometry": { "type": "LineString", "coordinates": [ [ 36.880858398478765, -1.285843095915539 ], [ 36.874794128487196, -1.288325157243444 ], [ 36.874346430702587, -1.287531711671836 ], [ 36.874183631508181, -1.286982403054516 ], [ 36.873980132515179, -1.286005854109399 ], [ 36.873796983421471, -1.284947925663892 ], [ 36.873573134529167, -1.284357926917395 ], [ 36.873267886039656, -1.283991720730371 ], [ 36.872555639564141, -1.283116894626805 ], [ 36.871477094901209, -1.281957240958644 ], [ 36.871151496512397, -1.281489310382374 ], [ 36.870968347418696, -1.281163793409354 ], [ 36.870988697317991, -1.280675517872245 ], [ 36.871334645606105, -1.279922759570292 ], [ 36.871965492484421, -1.279129311391214 ], [ 36.872820188255041, -1.278498621637949 ], [ 36.87369523392497, -1.278071380104149 ], [ 36.874773778587901, -1.277867931729739 ], [ 36.876279671136139, -1.277572931558222 ], [ 36.877521014993476, -1.277308448617023 ], [ 36.877561714792073, -1.278101897358919 ], [ 36.877683814187876, -1.278732587209662 ], [ 36.878009412576688, -1.279403966557899 ], [ 36.8784164105627, -1.28025844911063 ], [ 36.879067607340318, -1.281173965815381 ], [ 36.879494955225631, -1.281865689330883 ], [ 36.879779853815833, -1.282557412659521 ], [ 36.88032930109695, -1.283900169175406 ], [ 36.880614199687159, -1.284734305443819 ] ] } },
{ "type": "Feature", "properties": { "id": 6, "Name": "Arboretum", "Distance": 6.330000 }, "geometry": { "type": "LineString", "coordinates": [ [ 36.800639095435983, -1.274093961465127 ], [ 36.801290292213601, -1.274378789602704 ], [ 36.801941488991218, -1.274256720404739 ], [ 36.802633385567432, -1.274297410138051 ], [ 36.803121783150644, -1.275029825227478 ], [ 36.803813679726865, -1.276372585683486 ], [ 36.804220677712877, -1.27694224142273 ], [ 36.804790474893295, -1.276779482652973 ], [ 36.805563771066716, -1.276616723872898 ], [ 36.806784765024744, -1.276494654781086 ], [ 36.80723246280936, -1.276291206281858 ], [ 36.807558061198165, -1.276535344479006 ], [ 36.807598760996768, -1.276820172346388 ], [ 36.806947564219151, -1.276901551731273 ], [ 36.806296367441533, -1.277227069245025 ], [ 36.806011468851324, -1.277837414472183 ], [ 36.80617426804573, -1.278407069886693 ], [ 36.806744065226148, -1.279261552771448 ], [ 36.807191763010756, -1.280319483567792 ], [ 36.80723246280936, -1.281499482787115 ], [ 36.807191763010756, -1.282109826997628 ], [ 36.807110363413557, -1.28276086066178 ], [ 36.806744065226148, -1.283574652509031 ], [ 36.805726570261115, -1.284632581523221 ], [ 36.805238172677903, -1.285242924986023 ], [ 36.804749775094692, -1.285975336948838 ], [ 36.804627675698889, -1.28638223239293 ], [ 36.804098578317074, -1.28646361147397 ], [ 36.803650880532459, -1.28682981730649 ], [ 36.803040383553444, -1.287480849767807 ], [ 36.800516996040173, -1.287033264968494 ], [ 36.798034308325512, -1.286341542851443 ], [ 36.794249227055609, -1.285283614545028 ], [ 36.79298753329897, -1.285080166743538 ], [ 36.791522340549335, -1.284917408490685 ], [ 36.790138547396893, -1.284958098054868 ], [ 36.788958253237467, -1.285242924986023 ], [ 36.788062857668237, -1.285324304103385 ], [ 36.78733026129342, -1.284510512813165 ], [ 36.78619066693259, -1.28369672126378 ], [ 36.785539470154973, -1.283167756617764 ], [ 36.787126762300417, -1.282353964641091 ], [ 36.788998953036064, -1.280848448802274 ], [ 36.791603740146535, -1.278488449221299 ], [ 36.793191032291979, -1.277105000182195 ], [ 36.794208527257005, -1.276087757766537 ], [ 36.795103922826222, -1.275640170976171 ], [ 36.796569115575871, -1.27486706633672 ], [ 36.798319206915721, -1.274500858794907 ] ] } }
]
}