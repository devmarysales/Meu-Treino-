// ══════════════════════════════════════════════════════
// CONSTANTES
// ══════════════════════════════════════════════════════
const TYPE_COLOR = { inf:'#2DD4BF', sup:'#60A5FA', full:'#FB923C', rest:'#6B7280' };
const TYPE_LABEL = { inf:'INFERIOR', sup:'SUPERIOR', full:'FULL BODY', rest:'DESCANSO' };

const DEFAULT_DATA = {
  weeks: [
    { num:1, title:'Semana 1', phase:'Adaptação neuromuscular', days:[
      { id:'w1d1', label:'Seg', name:'Inferior A', type:'inf', exercises:[
        { id:'e1', name:'Agachamento livre', sets:3, reps:'12–15', rest:'75s', mods:['Iniciante: Goblet squat ou com cadeira','Intermediário: Barra no rack, carga moderada','Avançado: Pausa 2s na descida'] },
        { id:'e2', name:'Leg press 45°', sets:3, reps:'12–15', rest:'75s', mods:['Iniciante: Amplitude reduzida','Intermediário: Amplitude completa','Avançado: Unilateral'] },
        { id:'e3', name:'Cadeira extensora', sets:3, reps:'15', rest:'60s', mods:['Iniciante: Peso leve, foco na contração','Intermediário: Carga moderada','Avançado: Drop-set na última série'] },
        { id:'e4', name:'Cadeira flexora', sets:3, reps:'12–15', rest:'60s', mods:['Iniciante: Unilateral com apoio','Intermediário: Bilateral','Avançado: Excêntrico lento 3s'] },
        { id:'e5', name:'Panturrilha em pé', sets:4, reps:'20', rest:'45s', mods:['Iniciante: Bilateral com apoio','Intermediário: Alternado','Avançado: Unilateral com peso'] },
      ]},
      { id:'w1d2', label:'Ter', name:'Superior A — Empurrar', type:'sup', exercises:[
        { id:'e6', name:'Supino reto com barra', sets:3, reps:'12–15', rest:'75s', mods:['Iniciante: Supino inclinado c/ halteres leves','Intermediário: Barra, carga moderada','Avançado: Pausa 1s no peito'] },
        { id:'e7', name:'Desenvolvimento com halteres', sets:3, reps:'12–15', rest:'75s', mods:['Iniciante: Press Arnold, pouca carga','Intermediário: Halteres neutros','Avançado: Alternado com rotação'] },
        { id:'e8', name:'Crossover na polia', sets:3, reps:'15', rest:'60s', mods:['Iniciante: Elev. lateral c/ halteres leves','Intermediário: Polia alta','Avançado: Polia baixa + peak contraction'] },
        { id:'e9', name:'Tríceps corda na polia', sets:3, reps:'15', rest:'60s', mods:['Iniciante: Tríceps testa com elástico','Intermediário: Polia neutra','Avançado: Supino fechado'] },
        { id:'e10', name:'Elevação lateral', sets:3, reps:'15–20', rest:'45s', mods:['Iniciante: 2–5 kg','Intermediário: 8–12 kg','Avançado: Drop-set'] },
      ]},
      { id:'w1d3', label:'Qua', name:'Inferior B', type:'inf', exercises:[
        { id:'e11', name:'Stiff com barra', sets:3, reps:'12', rest:'75s', mods:['Iniciante: Stiff c/ halteres, sem dobrar joelhos','Intermediário: Barra, quadril afastado','Avançado: Déficit stiff'] },
        { id:'e12', name:'Avanço com halteres', sets:3, reps:'12 cada', rest:'75s', mods:['Iniciante: Sem peso, apoio se necessário','Intermediário: Halteres bilaterais','Avançado: Avanço búlgaro'] },
        { id:'e13', name:'Hip thrust com barra', sets:4, reps:'12–15', rest:'75s', mods:['Iniciante: Elevação pélvica no chão','Intermediário: Banco + barra','Avançado: Pausa 2s no topo'] },
        { id:'e14', name:'Adução na máquina', sets:3, reps:'15–20', rest:'60s', mods:['Iniciante: Amplitude menor','Intermediário: Completa','Avançado: Excêntrico 4s'] },
        { id:'e15', name:'Abdominal supra', sets:3, reps:'20', rest:'45s', mods:['Iniciante: Joelhos dobrados','Intermediário: Pernas semiretas','Avançado: Declinado com peso'] },
      ]},
      { id:'w1d4', label:'Qui', name:'Superior B — Puxar', type:'sup', exercises:[
        { id:'e16', name:'Puxada frontal na polia', sets:3, reps:'12–15', rest:'75s', mods:['Iniciante: Puxada c/ elástico ou graviton','Intermediário: Polia, carga moderada','Avançado: Pegada pronada estreita + pausa'] },
        { id:'e17', name:'Remada baixa na polia', sets:3, reps:'12–15', rest:'75s', mods:['Iniciante: Remada c/ halteres em decúbito','Intermediário: Polia neutra','Avançado: Remada barra T'] },
        { id:'e18', name:'Remada unilateral c/ halter', sets:3, reps:'12 cada', rest:'60s', mods:['Iniciante: Apoio no banco, carga leve','Intermediário: Joelho no banco','Avançado: Em pé, inclinado livre'] },
        { id:'e19', name:'Rosca direta com barra', sets:3, reps:'12–15', rest:'60s', mods:['Iniciante: Rosca alternada, halteres leves','Intermediário: Barra EZ','Avançado: 21s (7+7+7)'] },
        { id:'e20', name:'Rosca concentrada', sets:3, reps:'12 cada', rest:'45s', mods:['Iniciante: Com apoio no joelho','Intermediário: Sem apoio','Avançado: Excêntrico 3s'] },
      ]},
      { id:'w1d5', label:'Sex', name:'Full Body', type:'full', exercises:[
        { id:'e21', name:'Levantamento terra', sets:3, reps:'10–12', rest:'90s', mods:['Iniciante: Peso-morto c/ halteres / sumo light','Intermediário: Barra, carga moderada','Avançado: Déficit deadlift'] },
        { id:'e22', name:'Supino inclinado c/ halteres', sets:3, reps:'12', rest:'75s', mods:['Iniciante: 45°, carga leve','Intermediário: 30°','Avançado: Pausa 1s + explosivo'] },
        { id:'e23', name:'Agachamento goblet', sets:3, reps:'15', rest:'60s', mods:['Iniciante: Peso corporal','Intermediário: Kettlebell/halter','Avançado: Overhead squat'] },
        { id:'e24', name:'Remada curvada com barra', sets:3, reps:'12', rest:'75s', mods:['Iniciante: Halteres, inclinação maior','Intermediário: Barra 45°','Avançado: Pegada supinada, pausa'] },
        { id:'e25', name:'Prancha isométrica', sets:3, reps:'30–45s', rest:'45s', mods:['Iniciante: No joelho','Intermediário: Padrão','Avançado: Com toque alternado de ombros'] },
      ]},
      { id:'w1d6', label:'Sáb', name:'Descanso ativo', type:'rest', exercises:[
        { id:'e26', name:'Caminhada leve', sets:1, reps:'20–30 min', rest:'—', mods:['Todos os níveis: Intensidade baixa, FC < 120bpm'] },
        { id:'e27', name:'Foam roller + mobilidade', sets:1, reps:'15 min', rest:'—', mods:['Foco em quadril, torácica e panturrilha'] },
      ]},
    ]},
    { num:2, title:'Semana 2', phase:'Desenvolvimento — +volume, técnicas novas', days:[
      { id:'w2d1', label:'Seg', name:'Inferior A', type:'inf', exercises:[
        { id:'e28', name:'Agachamento livre', sets:4, reps:'10–12', rest:'75s', mods:['Iniciante: 3 séries, carga leve','Intermediário: 4 séries','Avançado: 5 séries + pausa excêntrica'] },
        { id:'e29', name:'Leg press 45°', sets:4, reps:'10–12', rest:'75s', mods:['Iniciante: 3 séries','Intermediário: 4 séries, carga +5%','Avançado: Drop-set na última'] },
        { id:'e30', name:'Stiff com halteres', sets:3, reps:'12', rest:'75s', mods:['Iniciante: Amplitude limitada','Intermediário: Completa','Avançado: Unilateral'] },
        { id:'e31', name:'Panturrilha sentado', sets:4, reps:'15–20', rest:'45s', mods:['Iniciante: 3 séries','Intermediário: 4 séries','Avançado: Excêntrico 4s'] },
        { id:'e32', name:'Cadeira flexora', sets:3, reps:'12', rest:'60s', mods:['Iniciante: 2 séries','Intermediário: 3 séries','Avançado: Excêntrico lento'] },
      ]},
      { id:'w2d2', label:'Ter', name:'Superior A — Empurrar', type:'sup', exercises:[
        { id:'e33', name:'Supino inclinado c/ halteres', sets:4, reps:'10–12', rest:'75s', mods:['Iniciante: 3 séries leves','Intermediário: 4 séries','Avançado: Pausa + explosivo'] },
        { id:'e34', name:'Desenvolvimento militar c/ barra', sets:3, reps:'10–12', rest:'75s', mods:['Iniciante: Halteres sentado','Intermediário: Barra em pé','Avançado: Por trás da nuca'] },
        { id:'e35', name:'Crucifixo inclinado', sets:3, reps:'12–15', rest:'60s', mods:['Iniciante: Abertura parcial','Intermediário: Amplitude total','Avançado: Cabo cruzado'] },
        { id:'e36', name:'Tríceps francês', sets:3, reps:'12', rest:'60s', mods:['Iniciante: Halter leve','Intermediário: Barra EZ','Avançado: Supinado + press fechado'] },
        { id:'e37', name:'Elevação lateral parcial', sets:4, reps:'15–20', rest:'45s', mods:['Iniciante: 2–5 kg, 3 séries','Intermediário: 8–12 kg, 4 séries','Avançado: Rest-pause'] },
      ]},
      { id:'w2d3', label:'Qua', name:'Inferior B', type:'inf', exercises:[
        { id:'e38', name:'Hip thrust com barra', sets:4, reps:'10–12', rest:'75s', mods:['Iniciante: 3 séries, elev. pélvica no chão','Intermediário: Banco + barra','Avançado: Pausa 2s + unilateral'] },
        { id:'e39', name:'Avanço búlgaro', sets:3, reps:'10 cada', rest:'75s', mods:['Iniciante: Avanço convencional sem peso','Intermediário: Com halteres','Avançado: Com barra no rack'] },
        { id:'e40', name:'Cadeira extensora', sets:4, reps:'12–15', rest:'60s', mods:['Iniciante: 3 séries, carga leve','Intermediário: 4 séries','Avançado: Drop-set'] },
        { id:'e41', name:'Abdução na máquina', sets:3, reps:'15–20', rest:'60s', mods:['Iniciante: Amplitude menor','Intermediário: Completa','Avançado: Excêntrico 3s'] },
        { id:'e42', name:'Abdominal na polia alta', sets:3, reps:'15', rest:'45s', mods:['Iniciante: Supra no chão','Intermediário: Polia neutra','Avançado: Com rotação'] },
      ]},
      { id:'w2d4', label:'Qui', name:'Superior B — Puxar', type:'sup', exercises:[
        { id:'e43', name:'Barra fixa (pull-up)', sets:4, reps:'6–10', rest:'90s', mods:['Iniciante: Puxada assistida / graviton / elástico','Intermediário: Peso corporal','Avançado: Com cinto de carga'] },
        { id:'e44', name:'Remada curvada com barra', sets:4, reps:'10–12', rest:'75s', mods:['Iniciante: Halteres, inclinação maior','Intermediário: Barra pronada','Avançado: Pausa na contração'] },
        { id:'e45', name:'Puxada pronada estreita', sets:3, reps:'12', rest:'60s', mods:['Iniciante: Polia ampla, carga leve','Intermediário: Estreita pronada','Avançado: Supinada + pausa'] },
        { id:'e46', name:'Rosca martelo', sets:3, reps:'12 cada', rest:'60s', mods:['Iniciante: Apoiado, carga leve','Intermediário: Em pé, bilateral','Avançado: Alternado + excêntrico'] },
        { id:'e47', name:'Rosca spider', sets:3, reps:'10–12', rest:'45s', mods:['Iniciante: Rosca inclinada no banco','Intermediário: Spider curl convencional','Avançado: Com barra + concentração'] },
      ]},
      { id:'w2d5', label:'Sex', name:'Full Body', type:'full', exercises:[
        { id:'e48', name:'Levantamento terra', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: 3 séries, peso leve','Intermediário: 4 séries, carga moderada','Avançado: 5 séries, carga alta'] },
        { id:'e49', name:'Supino reto com barra', sets:3, reps:'10–12', rest:'75s', mods:['Iniciante: Halteres','Intermediário: Barra','Avançado: Pausa + explosivo'] },
        { id:'e50', name:'Remada baixa polia', sets:3, reps:'12', rest:'75s', mods:['Iniciante: Halteres no banco','Intermediário: Polia','Avançado: Barra T'] },
        { id:'e51', name:'Agachamento goblet', sets:3, reps:'12', rest:'60s', mods:['Iniciante: Peso corporal','Intermediário: Kettlebell','Avançado: Overhead squat'] },
        { id:'e52', name:'Abdominal remador', sets:3, reps:'20', rest:'45s', mods:['Iniciante: Pernas dobradas','Intermediário: Padrão','Avançado: Peso sobre o peito'] },
      ]},
      { id:'w2d6', label:'Sáb', name:'Descanso ativo', type:'rest', exercises:[
        { id:'e53', name:'Atividade aeróbica leve', sets:1, reps:'20–40 min', rest:'—', mods:['Todos: Intensidade baixa, ex. ciclismo, natação'] },
        { id:'e54', name:'Alongamento global', sets:1, reps:'10–15 min', rest:'—', mods:['Foco em posteriores de coxa, peito e ombros'] },
      ]},
    ]},
    { num:3, title:'Semana 3', phase:'Intensificação — supersets, drop-sets', days:[
      { id:'w3d1', label:'Seg', name:'Inferior A', type:'inf', exercises:[
        { id:'e55', name:'Agachamento livre', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: 3×12 leve','Intermediário: 4×8–10','Avançado: 5×6–8 + pausa'] },
        { id:'e56', name:'Leg press unilateral', sets:4, reps:'10 cada', rest:'75s', mods:['Iniciante: Bilateral, 3 séries','Intermediário: Bilateral, 4 séries','Avançado: Unilateral'] },
        { id:'e57', name:'Stiff déficit com barra', sets:4, reps:'10', rest:'75s', mods:['Iniciante: Stiff convencional sem déficit','Intermediário: Sobre step','Avançado: Déficit 10cm'] },
        { id:'e58', name:'Cadeira flexora + extensora superset', sets:3, reps:'12+12', rest:'75s', mods:['Iniciante: Isolado, sem superset','Intermediário: Superset moderado','Avançado: Drop-set nos dois'] },
        { id:'e59', name:'Panturrilha unilateral', sets:4, reps:'15 cada', rest:'45s', mods:['Iniciante: Bilateral com apoio','Intermediário: Unilateral com apoio','Avançado: Sem apoio, excêntrico 4s'] },
      ]},
      { id:'w3d2', label:'Ter', name:'Superior A — Empurrar', type:'sup', exercises:[
        { id:'e60', name:'Supino reto pesado', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: 3×12 halteres','Intermediário: 4×8–10 barra','Avançado: 5×6 + forçadas'] },
        { id:'e61', name:'Supino inclinado c/ halteres', sets:3, reps:'10–12', rest:'75s', mods:['Iniciante: 3×15 leve','Intermediário: 3×10–12','Avançado: Rest-pause'] },
        { id:'e62', name:'Desenvolvimento Arnold', sets:4, reps:'10–12', rest:'75s', mods:['Iniciante: Press neutro sentado','Intermediário: Arnold bilateral','Avançado: Em pé'] },
        { id:'e63', name:'Mergulho (dip) no paralelo', sets:3, reps:'10–15', rest:'75s', mods:['Iniciante: Com apoio/banco','Intermediário: Peso corporal','Avançado: Com cinto de carga'] },
        { id:'e64', name:'Elev. lateral + frontal superset', sets:3, reps:'12+12', rest:'60s', mods:['Iniciante: Isolado, 3×15 cada','Intermediário: Superset moderado','Avançado: Drop-set'] },
      ]},
      { id:'w3d3', label:'Qua', name:'Inferior B', type:'inf', exercises:[
        { id:'e65', name:'Hip thrust (carga alta)', sets:5, reps:'8–10', rest:'90s', mods:['Iniciante: 3 séries, peso leve','Intermediário: 4 séries','Avançado: 5 séries, carga máxima'] },
        { id:'e66', name:'Avanço búlgaro c/ barra', sets:4, reps:'8 cada', rest:'90s', mods:['Iniciante: Halteres, 3×10','Intermediário: Barra, 4×8','Avançado: Déficit búlgaro'] },
        { id:'e67', name:'Cadeira extensora drop-set', sets:3, reps:'10→falha', rest:'75s', mods:['Iniciante: Sem drop, 3×15','Intermediário: Drop simples','Avançado: Drop-set duplo'] },
        { id:'e68', name:'Glúteo quatro apoios na polia', sets:3, reps:'15 cada', rest:'60s', mods:['Iniciante: Sem polia, no chão','Intermediário: Polia baixa','Avançado: Tornozelheira, excêntrico'] },
        { id:'e69', name:'Abdominal oblíquo', sets:3, reps:'15 cada', rest:'45s', mods:['Iniciante: Russian twist sem peso','Intermediário: Com halter','Avançado: Na polia lateral'] },
      ]},
      { id:'w3d4', label:'Qui', name:'Superior B — Puxar', type:'sup', exercises:[
        { id:'e70', name:'Barra fixa com carga', sets:4, reps:'6–10', rest:'90s', mods:['Iniciante: Assistida ou graviton','Intermediário: Peso corporal + pausa','Avançado: Cinto +5–10 kg'] },
        { id:'e71', name:'Remada curvada (carga +10%)', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: Halteres 3×12','Intermediário: Barra 4×8–10','Avançado: Yates row + pausa'] },
        { id:'e72', name:'Puxada supinada estreita', sets:3, reps:'10–12', rest:'75s', mods:['Iniciante: Pegada ampla pronada','Intermediário: Supinada estreita','Avançado: Pausa + excêntrico 3s'] },
        { id:'e73', name:'Rosca concentrada', sets:4, reps:'10–12', rest:'60s', mods:['Iniciante: Rosca alternada','Intermediário: Concentrada no banco','Avançado: Polia + peak contraction'] },
        { id:'e74', name:'Rosca reversa', sets:3, reps:'12–15', rest:'45s', mods:['Iniciante: Com elástico','Intermediário: Barra EZ','Avançado: Pausa no pico'] },
      ]},
      { id:'w3d5', label:'Sex', name:'Full Body Intenso', type:'full', exercises:[
        { id:'e75', name:'Levantamento terra pesado', sets:4, reps:'6–8', rest:'120s', mods:['Iniciante: 3×10 leve','Intermediário: 4×6–8 moderado','Avançado: 5×5 pesado'] },
        { id:'e76', name:'Supino inclinado c/ barra', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: Halteres leve','Intermediário: Barra','Avançado: +5% carga'] },
        { id:'e77', name:'Remada barra T', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: Remada curvada light','Intermediário: Barra T','Avançado: Pegada neutra, pausa'] },
        { id:'e78', name:'Agachamento hack', sets:3, reps:'12', rest:'75s', mods:['Iniciante: Goblet squat','Intermediário: Hack squat máquina','Avançado: Livre ou barra'] },
        { id:'e79', name:'Circuito core 3 exercícios', sets:3, reps:'15+15+30s', rest:'60s', mods:['Iniciante: Prancha + supra + mountain climber','Intermediário: Padrão','Avançado: Hollow body + leg raise + prancha dinâmica'] },
      ]},
      { id:'w3d6', label:'Sáb', name:'Descanso ativo', type:'rest', exercises:[
        { id:'e80', name:'Caminhada ou bicicleta leve', sets:1, reps:'20 min', rest:'—', mods:['Todos: FC baixa, sem impacto'] },
        { id:'e81', name:'Foam roller + estática', sets:1, reps:'15 min', rest:'—', mods:['Prioridade: MMII e costas'] },
      ]},
    ]},
    { num:4, title:'Semana 4', phase:'Sobrecarga máxima — volume e intensidade no pico', days:[
      { id:'w4d1', label:'Seg', name:'Inferior A', type:'inf', exercises:[
        { id:'e82', name:'Agachamento livre (carga máx.)', sets:5, reps:'6–8', rest:'120s', mods:['Iniciante: 3×12 moderado','Intermediário: 4×8 pesado','Avançado: 5×5–6 máximo + forçadas'] },
        { id:'e83', name:'Leg press drop-set', sets:4, reps:'8→falha', rest:'90s', mods:['Iniciante: Sem drop, 4×10','Intermediário: Drop simples','Avançado: Drop duplo + pausa'] },
        { id:'e84', name:'Stiff c/ barra (carga alta)', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: 3×12 halteres','Intermediário: 4×8–10 barra','Avançado: Déficit + carga máxima'] },
        { id:'e85', name:'Cadeira flexora excêntrica', sets:4, reps:'8–10 (4s)', rest:'75s', mods:['Iniciante: Sem excêntrico, 3×12','Intermediário: 2s excêntrico','Avançado: 4s excêntrico + pausa'] },
        { id:'e86', name:'Panturrilha + supra superset', sets:4, reps:'15+20', rest:'60s', mods:['Iniciante: Isolado, sem superset','Intermediário: Superset','Avançado: Drop-set no superset'] },
      ]},
      { id:'w4d2', label:'Ter', name:'Superior A — Empurrar', type:'sup', exercises:[
        { id:'e87', name:'Supino reto (carga máxima)', sets:5, reps:'5–6', rest:'120s', mods:['Iniciante: 3×12 halteres','Intermediário: 4×8 barra','Avançado: 5×5 + forçadas'] },
        { id:'e88', name:'Supino declinado c/ barra', sets:3, reps:'8–10', rest:'90s', mods:['Iniciante: Inclinado c/ halteres','Intermediário: Declinado, carga moderada','Avançado: Pausa 2s + explosivo'] },
        { id:'e89', name:'Dip com carga máxima', sets:4, reps:'8–10', rest:'90s', mods:['Iniciante: Tríceps no banco','Intermediário: Dip peso corporal','Avançado: Dip +10–20 kg'] },
        { id:'e90', name:'Elevação lateral rest-pause', sets:4, reps:'12+4+4', rest:'60s', mods:['Iniciante: 4×15 sem rest-pause','Intermediário: Rest-pause simples','Avançado: Rest-pause + drop'] },
        { id:'e91', name:'Tríceps corda drop-set', sets:3, reps:'10→6→falha', rest:'75s', mods:['Iniciante: 3×12 sem drop','Intermediário: Drop simples','Avançado: Drop triplo'] },
      ]},
      { id:'w4d3', label:'Qua', name:'Inferior B', type:'inf', exercises:[
        { id:'e92', name:'Hip thrust (carga pico)', sets:5, reps:'6–8', rest:'120s', mods:['Iniciante: 3 séries, moderado','Intermediário: 4 séries pesado','Avançado: 5 séries max + pausa'] },
        { id:'e93', name:'Avanço búlgaro pesado', sets:4, reps:'6–8 cada', rest:'90s', mods:['Iniciante: Halteres, 3×10','Intermediário: Barra, 4×8','Avançado: Carga máxima, déficit'] },
        { id:'e94', name:'Leg press unilateral pesado', sets:3, reps:'8–10 cada', rest:'90s', mods:['Iniciante: Bilateral, 3×12','Intermediário: Unilateral, moderado','Avançado: Máximo + drop'] },
        { id:'e95', name:'Cadeira extensora + abdução', sets:4, reps:'10+15', rest:'75s', mods:['Iniciante: Isolado','Intermediário: Superset moderado','Avançado: Drop-set em ambos'] },
        { id:'e96', name:'Abdominal declinado c/ peso', sets:4, reps:'15–20', rest:'45s', mods:['Iniciante: Supra no chão','Intermediário: Declinado sem peso','Avançado: +5–10 kg no peito'] },
      ]},
      { id:'w4d4', label:'Qui', name:'Superior B — Puxar', type:'sup', exercises:[
        { id:'e97', name:'Barra fixa carga máxima', sets:5, reps:'5–8', rest:'120s', mods:['Iniciante: Assistida 3 séries','Intermediário: Peso corporal 4 séries','Avançado: Cinto +15–20 kg, 5 séries'] },
        { id:'e98', name:'Remada curvada pesada', sets:5, reps:'6–8', rest:'90s', mods:['Iniciante: 3×12 halteres','Intermediário: 4×8 barra','Avançado: 5×6 + pausa'] },
        { id:'e99', name:'Puxada supinada + pausa', sets:4, reps:'8–10 + 2s', rest:'75s', mods:['Iniciante: Sem pausa, pegada ampla','Intermediário: Pausa 1s','Avançado: Pausa 2s + excêntrico'] },
        { id:'e100', name:'Rosca barra EZ pesada', sets:4, reps:'8–10', rest:'75s', mods:['Iniciante: Alternada leve','Intermediário: Barra EZ','Avançado: 21s pesado'] },
        { id:'e101', name:'Rosca concentrada máxima', sets:3, reps:'8–10', rest:'60s', mods:['Iniciante: 3×12 leve','Intermediário: 3×10 moderado','Avançado: Drop-set final'] },
      ]},
      { id:'w4d5', label:'Sex', name:'Full Body Máximo', type:'full', exercises:[
        { id:'e102', name:'Levantamento terra (máximo)', sets:5, reps:'5', rest:'120s', mods:['Iniciante: 3×8 moderado','Intermediário: 4×5 pesado','Avançado: 5×5 máximo'] },
        { id:'e103', name:'Supino reto', sets:4, reps:'6–8', rest:'90s', mods:['Iniciante: 3×12','Intermediário: 4×6–8','Avançado: 4×5 + AMRAP última série'] },
        { id:'e104', name:'Agachamento frontal', sets:4, reps:'8', rest:'90s', mods:['Iniciante: Goblet squat','Intermediário: Frontal leve','Avançado: Carga moderada-alta'] },
        { id:'e105', name:'Remada pendlay', sets:4, reps:'6–8', rest:'90s', mods:['Iniciante: Remada curvada normal','Intermediário: Pendlay moderado','Avançado: Pendlay pesado'] },
        { id:'e106', name:'Finisher: AMRAP 5 min', sets:1, reps:'max reps', rest:'—', mods:['Iniciante: Burpee modificado','Intermediário: Thruster c/ kettlebell','Avançado: Clean & press barbell'] },
      ]},
      { id:'w4d6', label:'Sáb', name:'Descanso ativo', type:'rest', exercises:[
        { id:'e107', name:'Deload opcional', sets:1, reps:'20–30 min leve', rest:'—', mods:['Todos: Se necessário, reduzir carga 40–50% na próxima semana'] },
        { id:'e108', name:'Mobilidade completa', sets:1, reps:'20 min', rest:'—', mods:['Foco total em recuperação: yoga, foam roller, banho frio'] },
      ]},
    ]},
  ]
};

// ══════════════════════════════════════════════════════
// INDEXEDDB
// ══════════════════════════════════════════════════════
const DB_NAME = 'HipertrofiaDB';
const DB_VERSION = 1;
let db = null;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('plan'))
        d.createObjectStore('plan', { keyPath: 'id' });
      if (!d.objectStoreNames.contains('progress'))
        d.createObjectStore('progress', { keyPath: 'dayId' });
      if (!d.objectStoreNames.contains('history')) {
        const hs = d.createObjectStore('history', { keyPath: 'sessionId', autoIncrement: true });
        hs.createIndex('byExId',   'exId',              { unique: false });
        hs.createIndex('byExDate', ['exId', 'dateISO'], { unique: false });
      }
    };
    req.onsuccess = e => { db = e.target.result; resolve(db); };
    req.onerror   = e => reject(e.target.error);
  });
}
function idb(store, mode, fn) {
  return new Promise((res, rej) => {
    const tx  = db.transaction(store, mode);
    const obj = tx.objectStore(store);
    const r   = fn(obj);
    r.onsuccess = () => res(r.result);
    r.onerror   = () => rej(r.error);
  });
}
const dbGet    = (s, k)    => idb(s, 'readonly',  o => o.get(k));
const dbPut    = (s, v)    => idb(s, 'readwrite', o => o.put(v));
const dbDel    = (s, k)    => idb(s, 'readwrite', o => o.delete(k));
const dbGetAll = (s)       => idb(s, 'readonly',  o => o.getAll());
const dbClear  = (s)       => idb(s, 'readwrite', o => o.clear());
function dbByIndex(store, indexName, key) {
  return new Promise((res, rej) => {
    const idx = db.transaction(store,'readonly').objectStore(store).index(indexName);
    const r   = idx.getAll(key);
    r.onsuccess = () => res(r.result);
    r.onerror   = () => rej(r.error);
  });
}

// ══════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════
const state = {
  plan:       null,   // { id:'plan', weeks:[...] }
  progress:   {},     // { [dayId]: { [exId]: { doneSets:[], setData:[] } } }
  openWeeks:  {},
  currentDay: null,
};

async function loadState() {
  // 1. Plano
  let rec = await dbGet('plan', 'plan').catch(() => null);
  if (!rec || !Array.isArray(rec.weeks) || rec.weeks.length === 0) {
    rec = { id: 'plan', weeks: JSON.parse(JSON.stringify(DEFAULT_DATA.weeks)) };
    await dbPut('plan', rec).catch(() => {});
  }
  state.plan = rec;

  // 2. Progresso
  const rows = await dbGetAll('progress').catch(() => []);
  state.progress = {};
  for (const row of rows) {
    if (row.dayId && row.data) state.progress[row.dayId] = row.data;
  }

  // 3. openWeeks (localStorage — é só preferência de UI)
  try {
    const raw = localStorage.getItem('hw_openweeks');
    state.openWeeks = raw ? JSON.parse(raw) : {};
  } catch { state.openWeeks = {}; }
}

async function savePlan() {
  // Só salva se o plano estiver válido — nunca salva um plano vazio/corrompido
  if (!state.plan || !Array.isArray(state.plan.weeks) || state.plan.weeks.length === 0) return;
  await dbPut('plan', state.plan).catch(console.error);
}

async function saveProgress(dayId) {
  const data = state.progress[dayId] || {};
  await dbPut('progress', { dayId, data }).catch(console.error);
}

function saveOpenWeeks() {
  try { localStorage.setItem('hw_openweeks', JSON.stringify(state.openWeeks)); } catch {}
}

// ── Helpers ──
function getDay(dayId) {
  if (!state.plan) return null;
  for (const w of state.plan.weeks)
    for (const d of w.days)
      if (d.id === dayId) return d;
  return null;
}

function getExProgress(dayId, exId) {
  if (!state.progress[dayId])         state.progress[dayId] = {};
  if (!state.progress[dayId][exId])   state.progress[dayId][exId] = { doneSets: [], setData: [] };
  const ep = state.progress[dayId][exId];
  if (!Array.isArray(ep.doneSets)) ep.doneSets = [];
  if (!Array.isArray(ep.setData))  ep.setData  = [];
  return ep;
}

function todayStr() {
  return new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
function todayISO() { return new Date().toISOString().slice(0, 10); }

// ══════════════════════════════════════════════════════
// TIMER
// ══════════════════════════════════════════════════════
let _timerIv = null, _timerTotal = 75, _timerLeft = 75, _timerOn = false;

function setTimer(s) {
  clearInterval(_timerIv); _timerOn = false;
  _timerTotal = s; _timerLeft = s;
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
  _timerBtn('▶ Iniciar'); _timerDisplay(); _timerBar();
}
function timerToggle() {
  if (_timerOn) {
    clearInterval(_timerIv); _timerOn = false; _timerBtn('▶ Continuar');
    document.getElementById('timerDisplay').classList.remove('running');
  } else {
    _timerOn = true; _timerBtn('⏸ Pausar');
    document.getElementById('timerDisplay').classList.add('running');
    _timerIv = setInterval(() => {
      _timerLeft--;
      if (_timerLeft <= 0) {
        clearInterval(_timerIv); _timerOn = false; _timerLeft = 0;
        document.getElementById('timerDisplay').classList.remove('running');
        _timerBtn('▶ Iniciar');
        showToast('⏱ Descanso finalizado! Próxima série.', 'acc');
      }
      _timerDisplay(); _timerBar();
    }, 1000);
  }
}
function timerReset() {
  clearInterval(_timerIv); _timerOn = false; _timerLeft = _timerTotal;
  document.getElementById('timerDisplay').classList.remove('running');
  _timerBtn('▶ Iniciar'); _timerDisplay(); _timerBar();
}
function _timerBtn(t)  { const el = document.getElementById('timerStartBtn'); if (el) el.textContent = t; }
function _timerDisplay() {
  const el = document.getElementById('timerDisplay'); if (!el) return;
  const m = Math.floor(_timerLeft / 60), s = _timerLeft % 60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function _timerBar() {
  const el = document.getElementById('timerBarFill'); if (!el) return;
  el.style.width = (_timerTotal > 0 ? _timerLeft / _timerTotal * 100 : 100) + '%';
}

// ══════════════════════════════════════════════════════
// SIDEBAR
// ══════════════════════════════════════════════════════
function renderSidebar() {
  if (!state.plan) return;
  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = '';
  state.plan.weeks.forEach((week, wi) => {
    const isOpen = !!state.openWeeks[wi];
    const grp    = document.createElement('div');
    grp.className = 'week-group';
    grp.innerHTML = `
      <button class="week-toggle ${isOpen ? 'open' : ''}" onclick="toggleWeek(${wi})">
        <span>${week.title}</span><span class="week-arrow">▶</span>
      </button>
      <div class="week-days ${isOpen ? 'open' : ''}">
        ${week.days.map(d => {
          const isActive = state.currentDay === d.id && state.currentDay !== '__charts__';
          return `<button class="day-btn ${isActive ? 'active' : ''}" onclick="selectDay('${d.id}')">
            <span class="day-dot" style="background:${TYPE_COLOR[d.type]}"></span>
            ${d.label} — ${d.name.length > 18 ? d.name.slice(0, 18) + '…' : d.name}
          </button>`;
        }).join('')}
      </div>`;
    nav.appendChild(grp);
  });
}

function toggleWeek(wi) {
  state.openWeeks[wi] = !state.openWeeks[wi];
  saveOpenWeeks();
  renderSidebar();
}

function selectDay(dayId) {
  state.currentDay = dayId;
  renderSidebar();
  renderMain();
}

// ══════════════════════════════════════════════════════
// MAIN AREA
// ══════════════════════════════════════════════════════
function renderMain() {
  const area = document.getElementById('contentArea');

  // Guard: plan must be loaded
  if (!state.plan || !state.plan.weeks) {
    area.innerHTML = '<div style="padding:40px;color:var(--text3);font-family:var(--font-mono)">Carregando...</div>';
    return;
  }

  // No day selected
  if (!state.currentDay || state.currentDay === '__charts__') {
    area.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:80vh;gap:16px;text-align:center;padding:20px;">
        <div style="font-size:48px">💪</div>
        <div style="font-family:var(--font-display);font-size:28px;font-weight:800;letter-spacing:-1px;">Selecione um treino</div>
        <div style="color:var(--text2);font-size:14px;max-width:300px;">Escolha uma semana e um dia no menu lateral para começar.</div>
      </div>`;
    _hideTimer();
    return;
  }

  const day = getDay(state.currentDay);
  if (!day) {
    area.innerHTML = '<div style="padding:40px;color:var(--text3);font-family:var(--font-mono)">Treino não encontrado.</div>';
    _hideTimer();
    return;
  }

  const col     = TYPE_COLOR[day.type];
  const lbl     = TYPE_LABEL[day.type];
  const totalEx = day.exercises.length;
  const doneEx  = day.exercises.filter(ex =>
    getExProgress(state.currentDay, ex.id).doneSets.length >= ex.sets
  ).length;

  // Build the page — timer is kept OUTSIDE contentArea (it's a sibling in the DOM)
  area.innerHTML = `
    <div class="topbar">
      <div class="topbar-left">
        <h2>${day.name}</h2>
        <p id="topbar-sub">${day.label} · ${totalEx} exercícios · ${doneEx}/${totalEx} completos</p>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <span class="type-badge" style="background:${col}22;color:${col}">${lbl}</span>
        <button class="btn btn-sm" onclick="openAddExToDay('${day.id}')">+ Exercício</button>
        ${day.type !== 'rest' ? `<button class="btn btn-sm btn-acc" onclick="resetDayProgress('${day.id}')">↺ Resetar dia</button>` : ''}
      </div>
    </div>`;

  if (day.type === 'rest') {
    _hideTimer();
    const restDiv = document.createElement('div');
    restDiv.className = 'rest-day-view';
    restDiv.innerHTML = `
      <div class="rest-icon">🛌</div>
      <div class="rest-title">Descanso ativo</div>
      <div class="rest-sub">Recuperação, mobilidade e liberação miofascial</div>
      ${day.exercises.map(ex => `
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:14px 18px;width:100%;max-width:400px;text-align:left">
          <div style="font-family:var(--font-display);font-weight:700;font-size:15px">${ex.name}</div>
          <div style="font-size:12px;color:var(--text2);font-family:var(--font-mono);margin-top:4px">${ex.reps}</div>
          ${ex.mods.map(m => `<div style="font-size:11px;color:var(--text3);margin-top:4px">• ${m}</div>`).join('')}
        </div>`).join('')}`;
    area.appendChild(restDiv);
    return;
  }

  // Show timer (it lives in #mainArea, ABOVE contentArea — not inside it)
  _showTimer();
  updateMobileNav();

  // Exercise cards
  const exArea = document.createElement('div');
  exArea.className = 'exercises-area';
  day.exercises.forEach((ex, ei) => exArea.appendChild(buildExCard(ex, ei, state.currentDay)));
  area.appendChild(exArea);
}

function _showTimer() { document.getElementById('timerCard').style.display = 'flex'; }
function _hideTimer() { document.getElementById('timerCard').style.display = 'none'; }

function refreshTopbar() {
  const day = getDay(state.currentDay); if (!day) return;
  const total = day.exercises.length;
  const done  = day.exercises.filter(ex =>
    getExProgress(state.currentDay, ex.id).doneSets.length >= ex.sets
  ).length;
  const el = document.getElementById('topbar-sub');
  if (el) el.textContent = `${day.label} · ${total} exercícios · ${done}/${total} completos`;
}

// ══════════════════════════════════════════════════════
// EXERCISE CARD
// ══════════════════════════════════════════════════════
function buildExCard(ex, ei, dayId) {
  const ep      = getExProgress(dayId, ex.id);
  const done    = ep.doneSets.length;
  const allDone = done >= ex.sets;

  const card = document.createElement('div');
  card.className = `ex-card ${allDone ? 'completed' : ''}`;
  card.id = `excard-${ex.id}`;

  // ── Header ──
  const hdr = document.createElement('div');
  hdr.className = 'ex-header';
  hdr.onclick   = () => card.classList.toggle('open');

  const dots = Array.from({ length: ex.sets }, (_, i) => {
    const ok = ep.doneSets.includes(i);
    return `<span class="series-dot ${ok ? 'done' : ''}" title="Série ${i + 1}"
      onclick="event.stopPropagation();toggleSet('${dayId}','${ex.id}',${i})"></span>`;
  }).join('');

  hdr.innerHTML = `
    <span class="ex-num">${String(ei + 1).padStart(2, '0')}</span>
    <div class="ex-name-block">
      <div class="ex-name">${ex.name}</div>
      <div class="ex-meta">${ex.sets} séries · ${ex.reps} reps · ${ex.rest} descanso</div>
    </div>
    <div class="ex-progress">
      <div class="series-dots">${dots}</div>
      ${allDone
        ? '<span class="ex-all-done">✓ completo</span>'
        : `<span style="font-size:11px;font-family:var(--font-mono);color:var(--text3)">${done}/${ex.sets}</span>`}
    </div>
    <span class="ex-expand-icon">▼</span>`;
  card.appendChild(hdr);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'ex-body';

  const inner = document.createElement('div');
  inner.className = 'ex-body-inner';

  // Tabela de séries
  const rows = Array.from({ length: ex.sets }, (_, i) => {
    const sd  = ep.setData[i] || { weight: '', reps: '' };
    const ok  = ep.doneSets.includes(i);
    return `<tr>
      <td class="set-num">${i + 1}</td>
      <td>
        <input class="weight-input" type="number" min="0" step="0.5" placeholder="kg"
          value="${sd.weight || ''}" id="w-${ex.id}-${i}"
          oninput="updateSetData('${dayId}','${ex.id}',${i},'weight',this.value)">
        <span class="unit-label">kg</span>
      </td>
      <td>
        <input class="reps-input" type="text" placeholder="reps"
          value="${sd.reps || ''}" id="r-${ex.id}-${i}"
          oninput="updateSetData('${dayId}','${ex.id}',${i},'reps',this.value)">
      </td>
      <td>
        <button class="set-done-btn ${ok ? 'done' : ''}" id="setbtn-${ex.id}-${i}"
          onclick="toggleSet('${dayId}','${ex.id}',${i})">
          ${ok ? '✓ feita' : '+ concluir'}
        </button>
      </td>
      <td class="last-weight" id="lastw-${ex.id}-${i}">—</td>
    </tr>`;
  }).join('');

  inner.innerHTML = `
    <table class="sets-table">
      <thead><tr>
        <th style="width:28px">#</th>
        <th>Peso</th>
        <th>Reps realizadas</th>
        <th>Status</th>
        <th>Última sessão</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>

    <div>
      <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono);letter-spacing:.06em;margin-bottom:6px">MODIFICAÇÕES POR NÍVEL</div>
      <div class="mods-section">
        ${ex.mods.map((m, mi) => {
          const cls = ['init', 'inter', 'adv'][mi] || 'init';
          const pfx = ['● Iniciante', '● Intermediário', '● Avançado'][mi] || '●';
          return `<div class="mod-item ${cls}">${pfx}: ${m.replace(/^(Iniciante|Intermediário|Avançado):\s*/, '')}</div>`;
        }).join('')}
      </div>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <button class="btn btn-sm btn-save" id="savebtn-${ex.id}"
        onclick="saveExSession('${dayId}','${ex.id}')">💾 Salvar sessão</button>
      <button class="btn btn-sm" onclick="openEditEx('${dayId}','${ex.id}')">✏ Editar</button>
      <button class="btn btn-sm btn-danger" onclick="deleteEx('${dayId}','${ex.id}')">✕ Remover</button>
      <button class="btn btn-sm" onclick="openFullHistory('${ex.id}','${ex.name}')">📊 Histórico</button>
    </div>`;

  body.appendChild(inner);

  // Mini-histórico assíncrono
  const histEl = document.createElement('div');
  histEl.className = 'history-section';
  histEl.id = `minihist-${ex.id}`;
  histEl.innerHTML = `<div class="history-title" style="color:var(--text3)">carregando histórico...</div>`;
  body.appendChild(histEl);

  card.appendChild(body);

  // Carrega dados assíncronos sem bloquear render
  loadMiniHistory(ex.id, histEl);
  loadLastRef(ex.id, ex.sets);

  return card;
}

function refreshExCard(exId, dayId) {
  const day = getDay(dayId); if (!day) return;
  const ex  = day.exercises.find(e => e.id === exId); if (!ex) return;
  const ei  = day.exercises.indexOf(ex);
  const old = document.getElementById(`excard-${exId}`); if (!old) return;
  const wasOpen = old.classList.contains('open');
  const neu = buildExCard(ex, ei, dayId);
  if (wasOpen) neu.classList.add('open');
  old.replaceWith(neu);
}

// ── Mini-histórico inline ──
async function loadMiniHistory(exId, container) {
  const sessions = await dbByIndex('history', 'byExId', exId).catch(() => []);
  sessions.sort((a, b) => a.dateISO > b.dateISO ? 1 : -1);

  if (!sessions.length) {
    container.innerHTML = `
      <div class="history-title">PROGRESSO DE CARGA</div>
      <div class="no-history">Nenhuma sessão salva. Use 💾 Salvar sessão após o treino.</div>`;
    return;
  }

  const recent = sessions.slice(-6);
  const maxW   = Math.max(...recent.flatMap(s => s.sets.map(r => parseFloat(r.weight) || 0)), 1);

  const rows = recent.slice().reverse().map((sess, hi) => {
    const prev    = recent.slice().reverse()[hi + 1];
    const avgW    = avg(sess.sets, 'weight');
    const prevAvg = prev ? avg(prev.sets, 'weight') : null;
    let trend = '';
    if (prevAvg !== null && avgW > 0) {
      const d = avgW - prevAvg;
      trend = d > 0
        ? `<span class="up">↑ +${d.toFixed(1)}kg</span>`
        : d < 0
        ? `<span class="down">↓ ${Math.abs(d).toFixed(1)}kg</span>`
        : `<span class="same">→</span>`;
    }
    return `<div class="history-entry">
      <span class="history-date">${sess.date}</span>
      <div class="history-bar"><div class="history-bar-fill" style="width:${maxW > 0 ? avgW / maxW * 100 : 0}%"></div></div>
      <span class="history-weight">${avgW > 0 ? avgW.toFixed(1) + 'kg' : '—'}</span>
      <span class="history-trend">${trend}</span>
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="history-title">PROGRESSO DE CARGA (últimas ${recent.length} sessões)</div>
    <div class="history-list">${rows}</div>`;
}

async function loadLastRef(exId, numSets) {
  const sessions = await dbByIndex('history', 'byExId', exId).catch(() => []);
  if (!sessions.length) return;
  sessions.sort((a, b) => a.dateISO > b.dateISO ? 1 : -1);
  const last = sessions[sessions.length - 1];
  for (let i = 0; i < numSets; i++) {
    const el = document.getElementById(`lastw-${exId}-${i}`);
    if (!el) continue;
    const s = last.sets[i];
    if (s && s.weight) el.innerHTML = `<span style="color:var(--text2)">${s.weight}kg × ${s.reps || '?'}</span>`;
  }
}

function avg(sets, field) {
  const vals = sets.map(s => parseFloat(s[field]) || 0).filter(v => v > 0);
  return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
}

// ══════════════════════════════════════════════════════
// TOGGLE SET & UPDATE DATA
// ══════════════════════════════════════════════════════
async function toggleSet(dayId, exId, setIdx) {
  const ep  = getExProgress(dayId, exId);
  const idx = ep.doneSets.indexOf(setIdx);
  if (idx === -1) {
    ep.doneSets.push(setIdx);
    ep.doneSets.sort((a, b) => a - b);
    timerReset(); timerToggle();
    showToast(`Série ${setIdx + 1} concluída! Descansando...`, 'acc');
  } else {
    ep.doneSets.splice(idx, 1);
  }
  await saveProgress(dayId);
  refreshExCard(exId, dayId);
  refreshTopbar();
}

async function updateSetData(dayId, exId, setIdx, field, value) {
  const ep = getExProgress(dayId, exId);
  if (!ep.setData[setIdx]) ep.setData[setIdx] = { weight: '', reps: '' };
  ep.setData[setIdx][field] = value;
  await saveProgress(dayId);
}

// ══════════════════════════════════════════════════════
// 💾 SALVAR SESSÃO
// ══════════════════════════════════════════════════════
async function saveExSession(dayId, exId) {
  const ep = getExProgress(dayId, exId);
  const ex = getDay(dayId)?.exercises.find(e => e.id === exId);
  if (!ex) return;

  const hasData = ep.setData.some(s => s && (s.weight || s.reps));
  if (!hasData) { showToast('Preencha peso ou reps antes de salvar.'); return; }

  const session = {
    exId, exName: ex.name, dayId,
    date:    todayStr(),
    dateISO: todayISO(),
    sets: Array.from({ length: ex.sets }, (_, i) => ({
      set:    i + 1,
      weight: ep.setData[i]?.weight || '',
      reps:   ep.setData[i]?.reps   || '',
      done:   ep.doneSets.includes(i),
    })),
  };

  // Sobrescreve sessão de hoje se já existir
  const todayList = (await dbByIndex('history', 'byExId', exId).catch(() => []))
    .filter(s => s.dateISO === todayISO());
  if (todayList.length) {
    session.sessionId = todayList[todayList.length - 1].sessionId;
  }
  await dbPut('history', session);

  showToast('Sessão salva! 💾', 'acc');
  const btn = document.getElementById(`savebtn-${exId}`);
  if (btn) {
    btn.innerHTML = '✓ Salvo';
    btn.style.color = 'var(--success)'; btn.style.borderColor = 'var(--success)';
    setTimeout(() => {
      btn.innerHTML = '💾 Salvar sessão'; btn.style.color = ''; btn.style.borderColor = '';
    }, 2500);
  }
  const histEl = document.getElementById(`minihist-${exId}`);
  if (histEl) loadMiniHistory(exId, histEl);
  loadLastRef(exId, ex.sets);
}

// ══════════════════════════════════════════════════════
// HISTÓRICO COMPLETO — modal
// ══════════════════════════════════════════════════════
async function openFullHistory(exId, exName) {
  const sessions = await dbByIndex('history', 'byExId', exId).catch(() => []);
  sessions.sort((a, b) => a.dateISO > b.dateISO ? -1 : 1); // mais recente primeiro

  let content = '';
  if (!sessions.length) {
    content = `<div style="color:var(--text3);font-size:13px;font-family:var(--font-mono);padding:8px 0">
      Nenhuma sessão registrada.<br>Use 💾 Salvar sessão durante o treino.</div>`;
  } else {
    content = sessions.map((sess, si) => {
      const prev     = sessions[si + 1];
      const avgW     = avg(sess.sets, 'weight');
      const prevAvgW = prev ? avg(prev.sets, 'weight') : null;
      const vol      = sess.sets.reduce((a, s) => a + (parseFloat(s.weight) || 0) * (parseInt(s.reps) || 0), 0);

      let badge = '';
      if (prevAvgW !== null && avgW > 0 && prevAvgW > 0) {
        const d = avgW - prevAvgW;
        badge = d > 0
          ? `<span class="hist-trend-badge up">↑ +${d.toFixed(1)}kg</span>`
          : d < 0
          ? `<span class="hist-trend-badge down">↓ ${Math.abs(d).toFixed(1)}kg</span>`
          : `<span class="hist-trend-badge same">→ estável</span>`;
      }

      const setRows = sess.sets.map(s => `<tr>
        <td style="color:var(--text3);font-family:var(--font-mono);font-size:11px;padding:6px 10px 6px 0">Série ${s.set}</td>
        <td style="font-family:var(--font-mono);font-size:13px;font-weight:500;color:var(--acc);padding:6px 10px 6px 0">
          ${s.weight ? s.weight + '<span style="color:var(--text3);font-size:10px;font-weight:400">kg</span>' : '<span style="color:var(--text3)">—</span>'}
        </td>
        <td style="font-family:var(--font-mono);font-size:13px;padding:6px 10px 6px 0">
          ${s.reps ? s.reps + '<span style="color:var(--text3);font-size:10px"> reps</span>' : '<span style="color:var(--text3)">—</span>'}
        </td>
        <td style="font-size:12px;padding:6px 0">
          ${s.done ? '<span style="color:var(--success)">✓</span>' : '<span style="color:var(--text3)">—</span>'}
        </td>
      </tr>`).join('');

      return `<div class="hist-session-block">
        <div class="hist-session-header">
          <div>
            <div class="hist-session-date">${sess.date}</div>
            <div class="hist-session-meta">
              Média: ${avgW > 0 ? avgW.toFixed(1) + 'kg' : '—'} &nbsp;·&nbsp;
              Volume: ${vol > 0 ? vol.toFixed(0) + 'kg' : '—'}
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            ${badge}
            <button class="btn btn-sm btn-danger" style="padding:3px 8px;font-size:10px"
              onclick="deleteSession(${sess.sessionId},'${exId}','${exName}')">✕</button>
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse">
          <thead><tr>
            <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 10px 6px 0;border-bottom:1px solid var(--border)">Série</th>
            <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 10px 6px 0;border-bottom:1px solid var(--border)">Peso</th>
            <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 10px 6px 0;border-bottom:1px solid var(--border)">Reps</th>
            <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 0 6px 0;border-bottom:1px solid var(--border)">Feita</th>
          </tr></thead>
          <tbody>${setRows}</tbody>
        </table>
      </div>`;
    }).join('');
  }

  openModal(`
    <div style="position:relative;margin-bottom:4px">
      <div class="modal-title">📊 ${exName}</div>
      <div style="font-size:11px;color:var(--text3);font-family:var(--font-mono);margin-top:2px">${sessions.length} sessão(ões)</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">${content}</div>
    ${sessions.length ? `<div style="margin-top:4px">
      <button class="btn btn-sm btn-danger" onclick="clearHistory('${exId}','${exName}')">🗑 Limpar tudo</button>
    </div>` : ''}`);
}

async function deleteSession(sessionId, exId, exName) {
  if (!confirm('Apagar esta sessão?')) return;
  await dbDel('history', sessionId);
  showToast('Sessão apagada.');
  openFullHistory(exId, exName);
  const el = document.getElementById(`minihist-${exId}`);
  if (el) loadMiniHistory(exId, el);
}

async function clearHistory(exId, exName) {
  if (!confirm(`Apagar TODO o histórico de "${exName}"?`)) return;
  const all = await dbByIndex('history', 'byExId', exId).catch(() => []);
  for (const s of all) await dbDel('history', s.sessionId);
  closeModal();
  showToast('Histórico apagado.');
  const el = document.getElementById(`minihist-${exId}`);
  if (el) loadMiniHistory(exId, el);
}

// ══════════════════════════════════════════════════════
// HISTÓRICO GERAL
// ══════════════════════════════════════════════════════
async function openHistoryModal() {
  const all = await dbGetAll('history').catch(() => []);
  if (!all.length) {
    openModal(`
      <div style="position:relative">
        <div class="modal-title">Histórico geral</div>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div style="color:var(--text3);font-family:var(--font-mono);font-size:13px">
        Nenhuma sessão registrada. Use 💾 Salvar sessão!</div>`);
    return;
  }

  const byEx = {};
  for (const s of all) {
    if (!byEx[s.exId]) byEx[s.exId] = { name: s.exName || s.exId, sessions: [] };
    byEx[s.exId].sessions.push(s);
  }

  const rows = Object.entries(byEx).map(([exId, { name, sessions }]) => {
    sessions.sort((a, b) => a.dateISO > b.dateISO ? 1 : -1);
    const last     = sessions[sessions.length - 1];
    const prev     = sessions.length > 1 ? sessions[sessions.length - 2] : null;
    const lastAvg  = avg(last.sets, 'weight');
    const prevAvg  = prev ? avg(prev.sets, 'weight') : null;
    let trend = '';
    if (prevAvg !== null && lastAvg > 0 && prevAvg > 0) {
      const d = lastAvg - prevAvg;
      trend = d > 0
        ? `<span style="color:var(--success);font-size:11px">↑ +${d.toFixed(1)}kg</span>`
        : d < 0
        ? `<span style="color:var(--danger);font-size:11px">↓ ${Math.abs(d).toFixed(1)}kg</span>`
        : `<span style="color:var(--text3);font-size:11px">→ estável</span>`;
    }
    return `<div onclick="openFullHistory('${exId}','${name}')"
      style="padding:10px 12px;background:var(--bg3);border-radius:var(--radius-sm);
             display:flex;align-items:center;justify-content:space-between;gap:12px;
             cursor:pointer;border:1px solid var(--border);transition:border-color .15s"
      onmouseover="this.style.borderColor='var(--border2)'"
      onmouseout="this.style.borderColor='var(--border)'">
      <div>
        <div style="font-weight:500;font-size:13px">${name}</div>
        <div style="font-size:11px;color:var(--text3);font-family:var(--font-mono)">${sessions.length} sessão(ões) · última: ${last.date}</div>
      </div>
      <div style="text-align:right">
        <div style="font-family:var(--font-mono);font-size:14px;color:var(--acc)">${lastAvg > 0 ? lastAvg.toFixed(1) + 'kg' : '—'}</div>
        ${trend}
      </div>
    </div>`;
  }).join('');

  openModal(`
    <div style="position:relative">
      <div class="modal-title">Histórico geral</div>
      <div style="font-size:11px;color:var(--text3);font-family:var(--font-mono);margin-top:2px">${all.length} sessão(ões) no banco</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">${rows}</div>`);
}

// ══════════════════════════════════════════════════════
// EDITAR / ADICIONAR / REMOVER
// ══════════════════════════════════════════════════════
function openEditEx(dayId, exId) {
  const ex = getDay(dayId)?.exercises.find(e => e.id === exId);
  if (!ex) return;
  openModal(`
    <div style="position:relative">
      <div class="modal-title">Editar exercício</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-section"><div class="modal-label">Nome</div>
      <input class="modal-input" id="me-name" value="${ex.name}"></div>
    <div class="modal-row">
      <div class="modal-section" style="flex:1"><div class="modal-label">Séries</div>
        <input class="modal-input" id="me-sets" type="number" value="${ex.sets}" min="1"></div>
      <div class="modal-section" style="flex:1"><div class="modal-label">Reps</div>
        <input class="modal-input" id="me-reps" value="${ex.reps}"></div>
      <div class="modal-section" style="flex:1"><div class="modal-label">Descanso</div>
        <input class="modal-input" id="me-rest" value="${ex.rest}"></div>
    </div>
    <div class="modal-section"><div class="modal-label">Mod. Iniciante</div>
      <input class="modal-input" id="me-mod0" value="${ex.mods[0] || ''}"></div>
    <div class="modal-section"><div class="modal-label">Mod. Intermediário</div>
      <input class="modal-input" id="me-mod1" value="${ex.mods[1] || ''}"></div>
    <div class="modal-section"><div class="modal-label">Mod. Avançado</div>
      <input class="modal-input" id="me-mod2" value="${ex.mods[2] || ''}"></div>
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-acc" onclick="saveEditEx('${dayId}','${exId}')">Salvar</button>
    </div>`);
}

async function saveEditEx(dayId, exId) {
  const day = getDay(dayId); if (!day) return;
  const ex  = day.exercises.find(e => e.id === exId); if (!ex) return;
  ex.name = document.getElementById('me-name').value.trim() || ex.name;
  ex.sets = parseInt(document.getElementById('me-sets').value) || ex.sets;
  ex.reps = document.getElementById('me-reps').value || ex.reps;
  ex.rest = document.getElementById('me-rest').value || ex.rest;
  ex.mods = ['me-mod0','me-mod1','me-mod2'].map(id => document.getElementById(id).value).filter(Boolean);
  await savePlan();
  closeModal();
  renderMain();
  showToast('Exercício atualizado!', 'acc');
}

async function deleteEx(dayId, exId) {
  if (!confirm('Remover este exercício?')) return;
  const day = getDay(dayId); if (!day) return;
  day.exercises = day.exercises.filter(e => e.id !== exId);
  await savePlan();
  renderMain();
  showToast('Exercício removido.');
}

function openAddExToDay(dayId) { _addExForm(dayId, null); }
function openAddExModal() {
  const opts = state.plan.weeks.flatMap(w =>
    w.days.map(d => `<option value="${d.id}">${w.title} — ${d.label}: ${d.name}</option>`)
  ).join('');
  _addExForm(null, opts);
}

function _addExForm(dayId, selectOpts) {
  openModal(`
    <div style="position:relative">
      <div class="modal-title">Novo exercício</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    ${selectOpts
      ? `<div class="modal-section"><div class="modal-label">Treino de destino</div>
         <select class="modal-input" id="na-day">${selectOpts}</select></div>`
      : `<input type="hidden" id="na-day" value="${dayId}">`}
    <div class="modal-section"><div class="modal-label">Nome do exercício</div>
      <input class="modal-input" id="na-name" placeholder="ex: Agachamento livre"></div>
    <div class="modal-row">
      <div class="modal-section" style="flex:1"><div class="modal-label">Séries</div>
        <input class="modal-input" id="na-sets" type="number" value="3" min="1"></div>
      <div class="modal-section" style="flex:1"><div class="modal-label">Reps</div>
        <input class="modal-input" id="na-reps" value="12"></div>
      <div class="modal-section" style="flex:1"><div class="modal-label">Descanso</div>
        <input class="modal-input" id="na-rest" value="75s"></div>
    </div>
    <div class="modal-section"><div class="modal-label">Mod. Iniciante</div>
      <input class="modal-input" id="na-mod0" placeholder="Carga leve"></div>
    <div class="modal-section"><div class="modal-label">Mod. Intermediário</div>
      <input class="modal-input" id="na-mod1" placeholder="Carga moderada"></div>
    <div class="modal-section"><div class="modal-label">Mod. Avançado</div>
      <input class="modal-input" id="na-mod2" placeholder="Drop-set"></div>
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-acc" onclick="saveNewEx()">Adicionar</button>
    </div>`);
}

async function saveNewEx() {
  const dayId = document.getElementById('na-day').value;
  const name  = document.getElementById('na-name').value.trim();
  if (!name) { showToast('Nome obrigatório!'); return; }
  const day = getDay(dayId); if (!day) return;

  // Adiciona ao array em memória — NÃO cria novo plano
  day.exercises.push({
    id:   'ex_' + Date.now(),
    name,
    sets: parseInt(document.getElementById('na-sets').value) || 3,
    reps: document.getElementById('na-reps').value || '12',
    rest: document.getElementById('na-rest').value || '75s',
    mods: ['na-mod0','na-mod1','na-mod2'].map(id => document.getElementById(id).value).filter(Boolean),
  });

  // Salva apenas o plano existente (não sobrescreve com DEFAULT)
  await savePlan();
  closeModal();

  // Navega para o dia onde o exercício foi adicionado
  state.currentDay = dayId;
  renderSidebar();
  renderMain();
  showToast('Exercício adicionado!', 'acc');
}

// ══════════════════════════════════════════════════════
// RESET
// ══════════════════════════════════════════════════════
async function resetDayProgress(dayId) {
  const day = getDay(dayId); if (!day) return;
  const choice = await choiceModal('Resetar este treino — o que limpar?', [
    { id: 'series',  label: '✓ Séries concluídas (checkmarks)' },
    { id: 'weights', label: '⚖ Pesos e repetições inseridos' },
    { id: 'both',    label: '🗑 Tudo (séries + pesos)' },
  ]);
  if (!choice) return;
  if (!state.progress[dayId]) state.progress[dayId] = {};
  for (const ex of day.exercises) {
    const ep = getExProgress(dayId, ex.id);
    if (choice !== 'weights') ep.doneSets = [];
    if (choice !== 'series')  ep.setData  = [];
  }
  await dbPut('progress', { dayId, data: state.progress[dayId] });
  renderMain();
  showToast('Resetado! Treinos e histórico mantidos.');
}

async function confirmReset() {
  if (!state.plan?.weeks) return;
  const choice = await choiceModal('Resetar TODOS os treinos — o que limpar?', [
    { id: 'series',  label: '✓ Séries concluídas (checkmarks) — todos os treinos' },
    { id: 'weights', label: '⚖ Pesos e reps inseridos — todos os treinos' },
    { id: 'both',    label: '🗑 Tudo (séries + pesos) — todos os treinos' },
  ]);
  if (!choice) return;
  for (const w of state.plan.weeks) {
    for (const day of w.days) {
      if (!state.progress[day.id]) state.progress[day.id] = {};
      for (const ex of day.exercises) {
        const ep = getExProgress(day.id, ex.id);
        if (choice !== 'weights') ep.doneSets = [];
        if (choice !== 'series')  ep.setData  = [];
      }
      await dbPut('progress', { dayId: day.id, data: state.progress[day.id] });
    }
  }
  renderSidebar(); renderMain();
  showToast('Resetado! Treinos e histórico mantidos.');
}

// Modal de escolha genérico (retorna Promise)
function choiceModal(title, options) {
  return new Promise(resolve => {
    const overlay = document.getElementById('modalOverlay');
    const box     = document.getElementById('modalBox');
    box.innerHTML = `
      <div style="position:relative">
        <div class="modal-title">${title}</div>
        <button class="modal-close" id="_choiceClose">✕</button>
      </div>
      <div style="font-size:12px;color:var(--text3);font-family:var(--font-mono);margin-bottom:8px">
        Treinos e histórico de sessões nunca serão afetados.
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${options.map(o => `<button class="reset-choice-btn" data-v="${o.id}">${o.label}</button>`).join('')}
      </div>`;
    overlay.classList.add('open');
    box.querySelectorAll('.reset-choice-btn').forEach(btn => {
      btn.onclick = () => { overlay.classList.remove('open'); resolve(btn.dataset.v); };
    });
    document.getElementById('_choiceClose').onclick = () => {
      overlay.classList.remove('open'); resolve(null);
    };
  });
}

// ══════════════════════════════════════════════════════
// PAINEL DE GRÁFICOS
// ══════════════════════════════════════════════════════
async function openChartsPanel() {
  state.currentDay = '__charts__';
  renderSidebar();
  _hideTimer();
  const area = document.getElementById('contentArea');

  const all = await dbGetAll('history').catch(() => []);
  if (!all.length) {
    area.innerHTML = `
      <div style="padding:28px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
          <button class="btn btn-sm" onclick="closeChartsPanel()">← Voltar</button>
          <div style="font-family:var(--font-display);font-size:22px;font-weight:800">📈 Painel de gráficos</div>
        </div>
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:40px;text-align:center">
          <div style="font-size:36px;margin-bottom:12px">📊</div>
          <div style="font-family:var(--font-display);font-size:18px;font-weight:700;color:var(--text2)">Nenhuma sessão salva ainda</div>
          <div style="font-size:13px;color:var(--text3);margin-top:8px">Use 💾 Salvar sessão durante o treino para gerar gráficos.</div>
        </div>
      </div>`;
    return;
  }

  const byEx = {};
  for (const s of all) {
    if (!byEx[s.exId]) byEx[s.exId] = { name: s.exName || s.exId, sessions: [] };
    byEx[s.exId].sessions.push(s);
  }
  for (const k of Object.keys(byEx)) {
    byEx[k].sessions.sort((a, b) => a.dateISO > b.dateISO ? 1 : -1);
  }

  const weeklyData  = buildPeriodData(byEx, 'week');
  const monthlyData = buildPeriodData(byEx, 'month');
  window._cd = { byEx, weeklyData, monthlyData };

  const exOpts = Object.entries(byEx)
    .map(([id, v]) => `<option value="${id}">${v.name} (${v.sessions.length}x)</option>`)
    .join('');

  area.innerHTML = `
    <div style="padding:28px 28px 40px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
        <button class="btn btn-sm" onclick="closeChartsPanel()">← Voltar</button>
        <div>
          <div style="font-family:var(--font-display);font-size:22px;font-weight:800;letter-spacing:-.5px">📈 Painel de gráficos</div>
          <div style="font-size:12px;color:var(--text3);font-family:var(--font-mono);margin-top:2px">${all.length} sessões · ${Object.keys(byEx).length} exercícios</div>
        </div>
      </div>
      <div class="chart-tabs" style="margin-bottom:20px">
        <button class="chart-tab active" onclick="switchTab('exercise',this)">Por exercício</button>
        <button class="chart-tab" onclick="switchTab('weekly',this)">Semanal</button>
        <button class="chart-tab" onclick="switchTab('monthly',this)">Mensal</button>
      </div>
      <div id="cp-exercise" class="chart-panel active-panel">
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:20px">
          <div style="margin-bottom:14px">
            <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono);margin-bottom:6px">EXERCÍCIO</div>
            <select class="modal-input" id="exSel" onchange="drawExChart()" style="max-width:400px;font-family:var(--font-mono);font-size:12px">${exOpts}</select>
          </div>
          <div id="ex-stats" style="margin-bottom:12px"></div>
          <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono);margin-bottom:6px">CARGA MÉDIA POR SESSÃO (kg)</div>
          <div id="ex-chart"></div>
          <div id="ex-table" style="margin-top:16px"></div>
        </div>
      </div>
      <div id="cp-weekly" class="chart-panel">
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:20px">
          <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono);margin-bottom:4px">CARGA MÉDIA POR SEMANA</div>
          <div style="font-size:12px;color:var(--text2);margin-bottom:14px">Média de todos os exercícios treinados naquela semana</div>
          <div id="wk-chart"></div>
          <div id="wk-table" style="margin-top:16px"></div>
        </div>
      </div>
      <div id="cp-monthly" class="chart-panel">
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:20px">
          <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono);margin-bottom:4px">CARGA MÉDIA POR MÊS</div>
          <div style="font-size:12px;color:var(--text2);margin-bottom:14px">Média de todos os exercícios treinados naquele mês</div>
          <div id="mo-chart"></div>
          <div id="mo-table" style="margin-top:16px"></div>
        </div>
      </div>
    </div>`;

  setTimeout(() => { drawExChart(); drawPeriodChart('wk', weeklyData, '#60A5FA'); drawPeriodChart('mo', monthlyData, '#2DD4BF'); }, 60);
}

function closeChartsPanel() { state.currentDay = null; renderSidebar(); renderMain(); }

function switchTab(panel, btn) {
  document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.chart-panel').forEach(p => p.classList.remove('active-panel'));
  btn.classList.add('active');
  document.getElementById('cp-' + panel).classList.add('active-panel');
}

function drawExChart() {
  const { byEx } = window._cd;
  const exId = document.getElementById('exSel')?.value; if (!exId) return;
  const { name, sessions } = byEx[exId];
  const vals   = sessions.map(s => avg(s.sets, 'weight'));
  const labels = sessions.map(s => s.date);
  const first  = vals.find(v => v > 0) || 0;
  const last   = [...vals].reverse().find(v => v > 0) || 0;
  const diff   = last - first;

  document.getElementById('ex-stats').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
      <div style="background:var(--bg3);border-radius:var(--radius-sm);padding:10px 12px">
        <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">INÍCIO</div>
        <div style="font-size:20px;font-weight:500;margin-top:2px">${first > 0 ? first.toFixed(1) + 'kg' : '—'}</div>
      </div>
      <div style="background:var(--bg3);border-radius:var(--radius-sm);padding:10px 12px">
        <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">ATUAL</div>
        <div style="font-size:20px;font-weight:500;color:var(--acc);margin-top:2px">${last > 0 ? last.toFixed(1) + 'kg' : '—'}</div>
      </div>
      <div style="background:var(--bg3);border-radius:var(--radius-sm);padding:10px 12px">
        <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">PROGRESSÃO</div>
        <div style="font-size:20px;font-weight:500;margin-top:2px;color:${diff > 0 ? 'var(--success)' : diff < 0 ? 'var(--danger)' : 'var(--text3)'}">${diff !== 0 ? (diff > 0 ? '+' : '') + diff.toFixed(1) + 'kg' : '—'}</div>
      </div>
    </div>`;

  document.getElementById('ex-chart').innerHTML = vals.length >= 2
    ? svgBars(labels, vals, '#C8F135')
    : `<div style="color:var(--text3);font-family:var(--font-mono);font-size:12px;padding:16px 0">Precisa de pelo menos 2 sessões para o gráfico.</div>`;

  // Tabela detalhada
  const rows = sessions.slice().reverse().map((sess, si) => {
    const prev = sessions.slice().reverse()[si + 1];
    const w    = avg(sess.sets, 'weight');
    const pw   = prev ? avg(prev.sets, 'weight') : null;
    let trend = '';
    if (pw !== null && w > 0 && pw > 0) {
      const d = w - pw;
      trend = d > 0 ? `<span style="color:var(--success)">↑ +${d.toFixed(1)}kg</span>`
            : d < 0 ? `<span style="color:var(--danger)">↓ ${Math.abs(d).toFixed(1)}kg</span>`
            : `<span style="color:var(--text3)">→</span>`;
    }
    const pills = sess.sets.map(s =>
      `<span style="background:var(--bg4);border-radius:4px;padding:2px 6px;font-size:10px;font-family:var(--font-mono)">${s.weight || '—'}kg×${s.reps || '?'}</span>`
    ).join(' ');
    return `<tr>
      <td style="padding:7px 10px 7px 0;font-family:var(--font-mono);font-size:12px;color:var(--text3)">${sess.date}</td>
      <td style="padding:7px 10px 7px 0;font-family:var(--font-mono);font-size:13px;font-weight:500;color:var(--acc)">${w > 0 ? w.toFixed(1) + 'kg' : '—'}</td>
      <td style="padding:7px 10px 7px 0;font-size:12px">${trend}</td>
      <td style="padding:7px 0;display:flex;gap:4px;flex-wrap:wrap">${pills}</td>
    </tr>`;
  }).join('');

  document.getElementById('ex-table').innerHTML = `
    <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono);letter-spacing:.06em;margin-bottom:8px">SESSÕES DETALHADAS</div>
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 10px 6px 0;border-bottom:1px solid var(--border)">Data</th>
        <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 10px 6px 0;border-bottom:1px solid var(--border)">Média</th>
        <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 10px 6px 0;border-bottom:1px solid var(--border)">Trend</th>
        <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 0 6px 0;border-bottom:1px solid var(--border)">Séries</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function drawPeriodChart(prefix, data, color) {
  const chartEl = document.getElementById(prefix + '-chart');
  const tableEl = document.getElementById(prefix + '-table');
  if (!chartEl) return;
  if (!data.labels.length) {
    chartEl.innerHTML = `<div style="color:var(--text3);font-family:var(--font-mono);font-size:12px;padding:16px 0">Dados insuficientes.</div>`;
    return;
  }
  chartEl.innerHTML = svgBars(data.labels, data.values, color);
  if (tableEl) {
    const rows = data.labels.map((lbl, i) => {
      const v    = data.values[i];
      const prev = i > 0 ? data.values[i - 1] : null;
      let trend = '';
      if (prev !== null && v > 0 && prev > 0) {
        const d = v - prev;
        trend = d > 0 ? `<span style="color:var(--success)">↑ +${d.toFixed(1)}kg</span>`
              : d < 0 ? `<span style="color:var(--danger)">↓ ${Math.abs(d).toFixed(1)}kg</span>`
              : `<span style="color:var(--text3)">→</span>`;
      }
      return `<tr>
        <td style="padding:7px 12px 7px 0;font-family:var(--font-mono);font-size:12px;color:var(--text3)">${lbl}</td>
        <td style="padding:7px 12px 7px 0;font-family:var(--font-mono);font-size:13px;font-weight:500;color:${color}">${v > 0 ? v.toFixed(1) + 'kg' : '—'}</td>
        <td style="padding:7px 0;font-size:12px">${trend}</td>
      </tr>`;
    }).reverse().join('');
    tableEl.innerHTML = `
      <table style="width:100%;border-collapse:collapse;max-width:400px">
        <thead><tr>
          <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 12px 6px 0;border-bottom:1px solid var(--border)">Período</th>
          <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 12px 6px 0;border-bottom:1px solid var(--border)">Carga média</th>
          <th style="font-size:9px;color:var(--text3);font-family:var(--font-mono);text-align:left;padding:0 0 6px 0;border-bottom:1px solid var(--border)">Tendência</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  }
}

function buildPeriodData(byEx, period) {
  const map = {};
  const MN  = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  for (const { sessions } of Object.values(byEx)) {
    for (const sess of sessions) {
      let key, label;
      if (period === 'week') {
        const d    = new Date(sess.dateISO + 'T12:00:00');
        const jan1 = new Date(d.getFullYear(), 0, 1);
        const wk   = Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
        key   = `${d.getFullYear()}-W${String(wk).padStart(2,'0')}`;
        label = `S${wk}/${String(d.getFullYear()).slice(2)}`;
      } else {
        key   = sess.dateISO.slice(0, 7);
        const [y, m] = key.split('-');
        label = `${MN[parseInt(m) - 1]}/${String(y).slice(2)}`;
      }
      if (!map[key]) map[key] = { label, total: 0, count: 0 };
      const w = avg(sess.sets, 'weight');
      if (w > 0) { map[key].total += w; map[key].count++; }
    }
  }
  const keys = Object.keys(map).sort();
  return {
    labels: keys.map(k => map[k].label),
    values: keys.map(k => map[k].count > 0 ? map[k].total / map[k].count : 0),
  };
}

function svgBars(labels, values, color) {
  const W = 560, H = 180, pL = 44, pR = 12, pT = 10, pB = 36;
  const cW = W - pL - pR, cH = H - pT - pB;
  const mx = Math.max(...values.filter(v => v > 0), 1);
  const n  = labels.length;
  const bW = Math.max(4, Math.floor(cW / n * 0.55));
  const gp = cW / n;
  let grid = '', bars = '', trend = '';
  for (let i = 0; i <= 4; i++) {
    const y = pT + cH - i / 4 * cH;
    grid += `<line x1="${pL}" y1="${y}" x2="${W-pR}" y2="${y}" stroke="#2E2E36" stroke-width="0.5"/>
      <text x="${pL-5}" y="${y+4}" fill="#5A5A5A" font-size="9" text-anchor="end" font-family="monospace">${(i / 4 * mx).toFixed(1)}</text>`;
  }
  const pts = [];
  for (let i = 0; i < n; i++) {
    const cx = pL + gp * i + gp / 2, v = values[i];
    const bH = v > 0 ? Math.max(2, v / mx * cH) : 2;
    const y  = pT + cH - bH;
    bars += `<rect x="${cx - bW/2}" y="${y}" width="${bW}" height="${bH}" fill="${i===n-1?'#C8F135':color}" opacity="${v>0?1:0.15}" rx="2"/>`;
    if (v > 0) { bars += `<text x="${cx}" y="${y-4}" fill="#9A9A9A" font-size="8" text-anchor="middle" font-family="monospace">${v.toFixed(1)}</text>`; pts.push({ x: cx, y }); }
    if (n <= 16 || i % Math.ceil(n/12) === 0)
      bars += `<text x="${cx}" y="${H-pB+14}" fill="#5A5A5A" font-size="8" text-anchor="middle" font-family="monospace">${labels[i]}</text>`;
  }
  if (pts.length >= 2) {
    trend = `<polyline points="${pts.map(p=>`${p.x},${p.y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.5"/>`;
    pts.forEach(p => { trend += `<circle cx="${p.x}" cy="${p.y}" r="2.5" fill="${color}" opacity="0.8"/>`; });
  }
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="overflow:visible;display:block">
    ${grid}
    <line x1="${pL}" y1="${pT}" x2="${pL}" y2="${pT+cH}" stroke="#3A3A45" stroke-width="1"/>
    <line x1="${pL}" y1="${pT+cH}" x2="${W-pR}" y2="${pT+cH}" stroke="#3A3A45" stroke-width="1"/>
    ${bars}${trend}
  </svg>`;
}

// ══════════════════════════════════════════════════════
// MODAL HELPERS
// ══════════════════════════════════════════════════════
function openModal(html) {
  document.getElementById('modalBox').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.remove('open');
}

// ══════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className   = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(t._t);
  t._t = setTimeout(() => { t.className = 'toast'; }, 3000);
}

async function exportData() {
  const hist = await dbGetAll('history').catch(() => []);
  const prog = await dbGetAll('progress').catch(() => []);
  const blob = new Blob([JSON.stringify({ plan: state.plan, progress: prog, history: hist, exported: new Date().toISOString() }, null, 2)], { type: 'application/json' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = 'treino_' + new Date().toLocaleDateString('pt-BR').replace(/\//g, '-') + '.json';
  a.click();
  showToast('Dados exportados!', 'acc');
}


// ══════════════════════════════════════════════════════
// MOBILE — drawer e navegação inferior
// ══════════════════════════════════════════════════════

function openDrawer() {
  document.getElementById('sidebarDrawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
  // Sincroniza o conteúdo do drawer com o sidebar desktop
  syncDrawerNav();
}

function closeDrawer() {
  document.getElementById('sidebarDrawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
}

function syncDrawerNav() {
  // Replica o mesmo HTML do sidebarNav para o sidebarNavDrawer
  const src = document.getElementById('sidebarNav');
  const dst = document.getElementById('sidebarNavDrawer');
  if (src && dst) dst.innerHTML = src.innerHTML;
}

function goToToday() {
  const dayNames   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const todayLabel = dayNames[new Date().getDay()];
  if (!state.plan) return;
  for (let wi = 0; wi < state.plan.weeks.length; wi++) {
    for (const d of state.plan.weeks[wi].days) {
      if (d.label === todayLabel) {
        state.currentDay    = d.id;
        state.openWeeks[wi] = true;
        saveOpenWeeks();
        renderSidebar();
        renderMain();
        return;
      }
    }
  }
}

function updateMobileNav() {
  // Destaca o botão "Hoje" se estiver no treino de hoje
  const dayNames   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const todayLabel = dayNames[new Date().getDay()];
  let isTodayDay = false;
  if (state.plan && state.currentDay) {
    const day = getDay(state.currentDay);
    if (day && day.label === todayLabel) isTodayDay = true;
  }
  const todayBtn = document.getElementById('mnav-today');
  if (todayBtn) todayBtn.classList.toggle('active', isTodayDay);

  const chartsBtn = document.getElementById('mnav-charts');
  if (chartsBtn) chartsBtn.classList.toggle('active', state.currentDay === '__charts__');
}

// ══════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════
openDB().then(async () => {
  await loadState();
  renderSidebar();

  // Auto-seleciona o treino do dia da semana atual
  const dayNames   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const todayLabel = dayNames[new Date().getDay()];
  let found = false;
  for (let wi = 0; wi < state.plan.weeks.length; wi++) {
    if (found) break;
    for (const d of state.plan.weeks[wi].days) {
      if (d.label === todayLabel) {
        state.currentDay    = d.id;
        state.openWeeks[wi] = true;
        found = true; break;
      }
    }
  }
  saveOpenWeeks();
  renderSidebar();
  renderMain();
  updateMobileNav();
}).catch(err => {
  console.error('IndexedDB error:', err);
  document.getElementById('contentArea').innerHTML =
    `<div style="padding:40px;color:var(--danger);font-family:var(--font-mono)">
      Erro ao abrir o banco de dados.<br>Verifique se o navegador suporta IndexedDB.
    </div>`;
});