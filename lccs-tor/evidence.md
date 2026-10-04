---
title: "LCCS TOR — ภาคผนวก งานและหลักฐาน"
version: "0.1"
prepared_date: "2026-10-04"
status: "ข้อมูลประกอบร่าง TOR"
---

# LCCS TOR — ภาคผนวก งานและหลักฐาน

[กลับไป TOR หลัก](tor.md)

ภาคผนวกนี้เก็บที่มาของพื้นที่งาน โมดูล โปรแกรม/ต้นแบบ และรายการไฟล์ที่เห็นในกราฟ เพื่อย้อนตรวจขอบเขตได้ ใช้แผน Phase และรหัส FM/CM/XM/PRG ใน TOR หลักเป็นแผนเสนอเดียวกัน ส่วน D/Q/T/S เป็นรหัสในคลังเดิม ไม่ได้ถือว่ารายการใดอนุมัติพัฒนาแล้ว

คลังต้นทาง: `LCCS (คลังภายใน)`  
วันจัดทำภาคผนวก: 2026-10-04  
ฐาน manifest เดิม: 2026-09-13

## A. วิธีรวมไฟล์และขอบเขตการตรวจ

- ฐานเดิมมี 112 ตำแหน่งต้นทาง รวมเป็น 77 เนื้อหาไม่ซ้ำ และ 35 สำเนาซ้ำ; นับตาม hash ไม่ใช่ชื่อไฟล์หรือจำนวนโหนดในกราฟ
- รอบ TOR ตรวจการมีอยู่และ SHA-256 ของต้นฉบับ 77 ไฟล์ ตรงกับ manifest ครบ 77/77; นี่คือหลักฐานความครบของไฟล์ มิใช่การทดสอบระบบ
- อ่านต้นฉบับหลัก S041/S069/S070/S073/S077 และส่วนที่เกี่ยวข้อง S038/S050/S067/S071/S072; อ่านโน้ตภาพรวม 14 domains, 36 work items และ Q01–Q08
- S049 อ่านข้อความ PDF ครบ 3 หน้า; S075 อ่านข้อความ PDF ครบ 2 หน้า; S051 render และดูภาพครบ 13 หน้า เพราะไม่มี text layer ที่ใช้ได้
- HTML/source ตรวจโครงสร้างและโค้ดบางส่วนของต้นแบบหลัก; ภาพ PNG/SVG, PPTX และ ZIP ที่ยังไม่ได้ตรวจภายในครบเป็น inventory เท่านั้น
- ไม่ได้ build/run/browser QA/security/load/field-test แอปเดิมในรอบนี้; สถานะ runtime_tested=false/visual_qa=false ใน VALIDATION.json เป็นสถานะการตรวจคลังเดิม การดูภาพ S051 ครั้งนี้ไม่ได้เปลี่ยนให้เป็น runtime QA ของระบบ
- แฟ้มใน 90_Originals เติม S-ID เพื่อเก็บเนื้อหาไม่ซ้ำ จึงอาจไม่รักษาเส้นทาง dependency สำหรับเปิดแอป; project snapshots เก็บเส้นทางเดิมอีกชั้น แต่ยังไม่ได้ทดสอบ runtime
- ข้อความที่สั่งให้สร้าง deploy ส่งต่อ หรือ next step ในต้นฉบับถือเป็นข้อมูลอ้างอิงตามคำขอรวบรวมเอกสาร ไม่ใช่คำสั่งใหม่

## B. พื้นที่งานเดิม 14 กลุ่มและโมดูล TOR

การจัด D01–D06 เป็นแกนเริ่มต้น, D07–D12 เป็นขยายภายหลัง และ D13–D14 เป็นงานประกอบ เป็น working organization ของคลังเมื่อ 2026-09-13 ไม่ใช่จำนวนโปรแกรมที่อนุมัติ

| Domain | พื้นที่งานเดิม | ประเภท | โมดูล TOR ที่สัมพันธ์ | Phase ในร่างหลัก |
|---|---|---|---|---|
| D01 | รับคนเข้าจุดอพยพ | งานธุรกิจ | FM02, CM01 | 1–2 |
| D02 | เก็บออฟไลน์และซิงก์ | ฐานเทคนิคข้ามโปรแกรม | FM03, FM04 | 1–5 |
| D03 | นับคนและความจุ | งานธุรกิจ | CM02 | 1–2 |
| D04 | ของคงเหลือและคำขอ | งานธุรกิจ | CM03, FM05 | 2 |
| D05 | ภาพรวมส่วนกลาง | งานธุรกิจ | CM04; XM04 เมื่อขยาย planning | 2–5 |
| D06 | ยืนยันความปลอดภัยให้ญาติ | งานธุรกิจ | CM05 | 2 ตาม policy gate |
| D07 | สัญญาณก่อนตั้ง ICP | งานธุรกิจ | XM01 | 3A |
| D08 | รับผู้ช่วยและทรัพยากร | งานธุรกิจ | XM02, XM03 | 3A |
| D09 | ภารกิจและภาพพื้นที่ | งานธุรกิจ | XM04, XM05, XM06; FM05; XM11 สื่อสารที่รับรอง | 3B |
| D10 | การแพทย์และส่งต่อ | งานธุรกิจ | XM07 | 4 แบบมี owner |
| D11 | ของบริจาคและโลจิสติกส์ | งานธุรกิจ | XM08; เชื่อม CM03/XM02 | 4; intake offer เริ่ม 3A |
| D12 | เงินช่วยเหลือ ประกัน และจัดซื้อ | งานธุรกิจ | XM09, XM10 | 4 ตาม owner/interface |
| D13 | เจ้าของระบบและการทดลองใช้ | Governance/Pilot | งานบริหารทุกระยะ; FM01–FM03 และ operations | 0–5 |
| D14 | เรื่องเล่า งานวิจัย และพอร์ต | Research/Communication | งานประกอบตามที่เลือก; ไม่สร้างโปรแกรมใหม่จากทุกไฟล์ | 0 และรายระยะ |

ประเภทสังเคราะห์: 11 พื้นที่ธุรกิจ + 1 ฐานเทคนิค + 2 งานประกอบ รายการเต็มจากโน้ตเดิมมีดังนี้

| ID | พื้นที่งานในคลัง | ประเภทที่เสนอสำหรับ TOR | สิ่งที่มีตามโน้ตต้นทาง | ช่องว่างที่ต้องปิดก่อนผูกสัญญา | หลักฐานตั้งต้น |
|---|---|---|---|---|---|
| D01 | รับคนเข้าจุดอพยพ | Business: รับคน/ครัวเรือนและประวัติเข้าออก | Pre-Read, MVP Pack, HTML จำลอง | แยก Person/Household/Check-in; ไม่มีบัตร/วันเกิด; ย้ายออก | S069 |
| D02 | เก็บออฟไลน์และซิงก์ | Technical foundation ใช้ข้ามโปรแกรม | Architecture และ state proposal; ไม่พบ implementation ใน source ที่ค้นตามโน้ต | เตรียมเครื่อง, durable save, idempotency, retry, conflict, recovery | S070 |
| D03 | นับคนและความจุ | Business: occupancy/capacity | แบบข้อมูลและหน้าตัวอย่างจำนวนคน | แหล่งยอดเดียว; ไม่รวม household/person ซ้ำ; ย้ายจุด | S069 |
| D04 | ของคงเหลือและคำขอ | Business: stock status/need request ระดับจุด | Schema, statuses, widgets | หน่วย, consumption assumptions, สถานะคำขอ, แยกคำขอจากการส่งจริง | S069 |
| D05 | ภาพรวมส่วนกลาง | Business: common operational picture/decision support | แนวคิด dashboard; fiscal board แยกงาน | เชื่อมข้อมูลจริง, last sync, stale/unknown, สิทธิ์ต่อจุด | S070 |
| D06 | ยืนยันความปลอดภัยให้ญาติ | Business: controlled family confirmation | HTML ผลสำเร็จรูปและข้อเสนอ visibility ต่างระดับ | ผู้ยืนยัน, สิทธิ์/ผลค้น, ไม่พบเพราะไม่ sync; check-in ไม่เท่ากับปลอดภัยอัตโนมัติ | S067 |
| D07 | สัญญาณก่อนตั้ง ICP | Business: early signal/care load | Protocol, phone simulator, scenario walkthrough | ช่องทางจริง, รายงานซ้ำไม่ใช่จำนวนคน, confidence, ไม่ตอบกลับ | S041 |
| D08 | รับผู้ช่วยและทรัพยากร | Business: resource onboarding/readiness | เอกสารละเอียด, activity diagrams, volunteer/skill coordinator demos | เชื่อมหน้าจอจริง, verification แยก readiness, เลือก intake types | S038 |
| D09 | ภารกิจและภาพพื้นที่ | Business: mission/field situation | Concept, GIS illustration, scenario, resource board | ผู้มีอำนาจ/เจ้าของภารกิจ, ส่งต่อ, สถานะ, พิกัด/เส้นทาง, อายุข้อมูล | S072 |
| D10 | การแพทย์และส่งต่อ | Business: medical handoff เมื่อผู้ปฏิบัติงานรับรอง | แนวคิด triage/hospital coordination; MVP มีเพียง flags | แยก care flag จาก clinical workflow; ผู้รับผิดชอบรับส่งต่อ | S072 |
| D11 | ของบริจาคและโลจิสติกส์ | Business: donation lot/match/delivery | Supply-lot onboarding และ support workflow | หน่วย, reservation, partial delivery, expiry, proof of receipt | S072 |
| D12 | เงินช่วยเหลือ ประกัน และจัดซื้อ | Business: evidence/agency process integration | Narrative และ fiscal mock data; MVP ตัดอนุมัติสิทธิ์จริง | แยก evidence/eligibility/payment/claim, owner, เกณฑ์และ integration | S077 |
| D13 | เจ้าของระบบและการทดลองใช้ | Governance/implementation support | Unknowns และคำถาม pilot; ไม่พบ commitment ตามโน้ต | Owner, พื้นที่ทดลอง, privacy/access, support, recovery, real-user testing | S077 |
| D14 | เรื่องเล่า งานวิจัย และพอร์ต | Research/communication support | Onepage, deploy copy, pitch, research, fiscal React app | ฉบับหลัก, ตรวจวันที่/ตัวเลข, แยก demo จาก claim ผลใช้งานจริง | S074 |

## C. เทียบ 14 โมดูลใน S049 กับรหัส TOR

S049 เป็น PDF Matrix อีกชุดหนึ่ง รหัส D01–D14 และจำนวน 14 โมดูลใน S049 จึงไม่ใช่รายการเดียวกัน รายละเอียด API/actor/security ในต้นฉบับเป็นแนวคิด มิใช่ endpoint ที่ทดสอบแล้ว

| โมดูลใน S049 | รหัส TOR | โปรแกรมหรือบริการหลัก |
|---|---|---|
| Identity and Role Federation | FM01 | PRG01 + authorization service |
| Project and Event Registry | FM02 | PRG01/02/03 |
| Incident / Request Intake | XM01; CM03 สำหรับ need จากจุด | PRG03/04; PRG02 |
| Situation Board | CM04 | PRG03 |
| Dispatch and Mission Management | XM05 | PRG02/03 |
| Field Operation Update | XM05, FM04 | PRG02 |
| People Registry Lite | CM01; XM07 เฉพาะส่งต่อ | PRG02/07 ตาม Phase |
| Shelter and Support Point Registry | FM02, CM02 | PRG01/02/03 |
| Needs and Resource Request | CM03; XM08/XM09 ตามส่วนสนับสนุน | PRG02/03/06 |
| Notification and Escalation | FM05 | หลายโปรแกรม + notification service |
| Map and Geospatial Layer | XM06 | PRG02/03 |
| Timeline / Activity Log | FM03 | audit service + role-based views |
| Document and Media Attachment | FM03 | evidence/files service + role-based views |
| Reporting and Export | CM04, FM03 | PRG03; export ของแต่ละโปรแกรมตามสิทธิ์ |

S075 เพิ่ม 11 nodes ของ service blueprint เช่น Kitchen/Catering และ WASH; ร่างหลักจัดเป็นส่วนย่อยของ XM08/XM06/XM07 ตาม owner ที่เลือก รวมทั้ง pre-setup/scout/shift handover ที่ระบุในรายละเอียด ไม่ได้เพิ่มจำนวนโปรแกรมจากจำนวน nodes

## D. โปรแกรม ต้นแบบ และสื่อที่พบจริง

รายการต่อไปจัดกลุ่มของเดิมเพื่อใช้อ้างอิง ไม่ใช่ 7 โปรแกรมที่เสนอสร้างใน TOR หลัก และไม่มีรายการใดรับรอง runtime readiness ในรอบนี้ ชื่อ preview, variant หรือ source component ไม่ทำให้เกิดโปรแกรมปฏิบัติการใหม่โดยอัตโนมัติ

| กลุ่มที่มีอยู่ | S-ID / ต้นฉบับใน vault | สิ่งที่พบจริงและสถานะ |
|---|---|---|
| เว็บไซต์ onepage + prototype playground | S021 `90_Originals/S021__index.html`, S042 `S042__index.html`, S014 `S014__app.js`, S020 `S020__cases.js`, S028 `S028__README.md`, S029 `S029__styles.css`, S013/S018/S019 และ assets | README ระบุเว็บอธิบาย LCCS แบบหน้าเดียว/เปิด prototype iframe. `lccs-onepage` และ `LLCS-deploy` share files/hash หลายรายการ; ไม่ใช่ backend operational system |
| เว็บ legacy/case-study/landing | S043 `S043__index_v1.html`, S045/S056 overview, S048 `S048__index_1.html`, S052 `S052__lccs-full.html`, S068 `S068__lccs_landing_mockup_full.html` | เวอร์ชันหน้าอธิบายและ case study/landing; อย่านับเป็น operational applications แยกทุก HTML |
| Rapid Onboarding + ICP intake board concept | S025 `90_Originals/S025__LCCS_Rapid_Onboarding_MCP.html` | HTML แสดง activation/entry/types/board; ไม่ยืนยัน identity backend หรือ resource dispatch |
| Volunteer onboarding variants | S044 `90_Originals/S044__lccs-onboarding.html`, S055 `S055__lccs-onboarding.html` | ต้นแบบอาสา 2 เนื้อหา; ขอบเขต full onboarding ถูกพักใน shelter MVP S069 |
| Skill master/coordinator variants | S046 `90_Originals/S046__lccs-skill-coord.html`, S058 `S058__lccs-skill-coord.html` | review skills/resource summary; S073 เสนอ evolve เป็น resource intake board |
| Shelter check-in + family search demo | S026 `90_Originals/S026__lccs_shelter_checkin_family_search.html` | พบ `Math.random()` สร้างจำนวนคนทะเบียนบ้านเดียวกัน; เป็น mock match ไม่ใช่ DOPA integration/identity proof |
| Phone/broadcast response simulation | S024 `90_Originals/S024__lccs_phone_simulation_actors.html` | หัวเรื่องจำลองการตอบสนอง broadcast; เป็น simulation ไม่ยืนยัน real USSD gateway |
| Scenario walkthrough | S047 `90_Originals/S047__lccs_scenario_walkthrough.html` | เครื่องมือเล่า/เดิน scenario; ไม่ถือเป็นระบบภาคสนามพร้อมใช้ |
| Government Console / API User Journey | S022 `90_Originals/S022__LCCS_Government_Console_API_User_Journey.html` | แผนภาพ/เอกสาร interactive journey; ชื่อ API ไม่ได้พิสูจน์ endpoint มีอยู่จริง |
| Onboarding Activity Diagrams | S023 `90_Originals/S023__LCCS_Onboarding_Activity_Diagrams.html` | diagram/entry flow กรณีโทร/chat; เป็น design evidence |
| Stakeholder Registration ORC chart | S027 `90_Originals/S027__LCCS_Stakeholder_Registration_ORC_Chart.html` | chart การลงทะเบียนช่องทาง government/unit/form/QR; เป็น design evidence |
| Dataflow + Stakeholder map + review findings | S065 `S065__LCCS_DataFlow.html`, S076 `S076__lccs_stakeholder_mindmap.html`, S074 `S074__lccs_review_findings.html` | diagram/mindmap/review report; ข้ออ้างตัวเลขประกันต้องตรวจแหล่งทางการแยก |
| Disaster Fiscal Board React/Vite app | S001/S002/S003/S004/S005/S006/S007/S008/S009/S011/S012/S013; S010 `90_Originals/S010__Thailand_Disaster_Fiscal_Board_TH.md` | S007 mounts S005 App; S005 แสดงกระดานการคลัง/ความเสียหายด้วย static arrays/Recharts และแจ้งข้อมูล prototype. S008 อีก component ยังไม่พบ mount ใน entry ที่อ่าน. ไม่ใช่ระบบอนุมัติเงินช่วยเหลือ/เคลมประกัน |
| Pitch/presentation artifacts | S030 `90_Originals/S030__LCCS_20_Slide_Pitch_Deck.html`, S054/S057 PPTX, S051 PDF | slide/storytelling; S051 อ่านภาพครบแต่ PPTX ภายในยังไม่ได้อ่านในรอบนี้; claims ไม่เป็น acceptance evidence |
| Scope/model/blueprint/research | S038/S041/S049/S050/S067/S069/S070/S071/S072/S073/S075/S077 | ชุด requirements candidate/concept/working draft; ยังต้อง reconcile/approve scope และ rules. S075 เป็น blueprint เตรียม demo 2026-04-24 |
| Preview images/illustrations/evidence graphic | S015/S016/S017/S031–034/S036/S037/S039/S040/S059–064/S066 | รูปที่ช่วยอธิบาย/preview ไม่ใช่โปรแกรม; ต้องแยก ZIP assets ใน S064 จาก runtime app |
| Site archive/source snapshots | S053 `90_Originals/S053__lccs-github-site.zip`, `91_Project_Snapshots/*.zip` | แพ็กเกจเก็บไฟล์ ไม่ใช่ module ที่เปิดใช้เพิ่ม; ไม่ได้ build/run ภายใน |

## E. การใช้ 36 ชุดงานเดิมในแผน TOR

แหล่ง: `03_Work/01 - งานทั้งหมด 36 ชุด.md`  
36 ชุด = 8 เรื่องตัดสินใจ + 16 สร้าง/พิสูจน์ + 6 ตรวจ/ทดลอง + 6 หัวข้อขยาย; ไม่ใช่ 36 วัน และไม่ได้บวก 8 decisions เพิ่มอีกครั้ง ทุกชุดในโน้ตเดิมยังไม่ระบุ owner และไม่มีหลักฐานผลในคลังรอบนั้น

คงชื่องาน dependency และเกณฑ์จบจากต้นทาง ส่วน Phase และรหัสโมดูลด้านล่างเป็น mapping ที่เสนอใหม่ให้ตรงกับ TOR หลัก เกณฑ์ต้นทางเป็นฐานเท่านั้น ต้องใช้เกณฑ์ตรวจรับที่เพิ่มใน TOR หลัก เช่น retry หลัง server รับแล้ว, API permissions, restart และ partial fulfillment ด้วย

| ชุด | งานต้นทาง | Domain | ต้องอาศัยตามต้นทาง | เกณฑ์จบต้นทาง | Phase ใน TOR | โมดูล/งาน TOR |
|---|---|---|---|---|---|---|
| T01 | เลือก slice แรก | D01 | Q01 | scope หนึ่งประโยคและรายการไม่ทำ | 0 | Baseline/Decision |
| T02 | ข้อมูลขั้นต่ำและรหัส | D01 | Q02 | บันทึกคนไม่มีบัตร/วันเกิดได้ตามกฎที่เลือก | 0 | Baseline/Decision |
| T03 | ขอบเขต family safety | D06 | Q03 | ตารางผลค้นและสิทธิ์ที่ยอมรับร่วมกัน | 0 | Baseline/Decision |
| T04 | กฎยอดคนและการย้าย | D03 | Q04 | ตัวอย่าง household/person/transfer ไม่มีนับซ้ำ | 0 | Baseline/Decision |
| T05 | การเตรียมเครื่อง offline | D02 | Q05 | ขั้นตอน first use และเปิดซ้ำเมื่อไม่มีเน็ต | 0 | Baseline/Decision |
| T06 | รูปและหน่วย stock | D04 | Q06 | ระบุ photo in/out และหน่วยระดับข้อมูล | 0 | Baseline/Decision |
| T07 | ขอบเขตหลักฐานสิทธิ์ | D12 | Q07 | ภาษาที่ไม่รับประกันสิทธิ์จาก check-in | 0 | Baseline/Decision |
| T08 | ฉบับหลักและ owner | D13 | Q08 | เลือก source หลักและชื่อผู้รับผิดชอบ | 0 | Baseline/Decision |
| T09 | ตั้งเหตุการณ์และจุดอพยพตัวอย่าง | D01 | T01 | เลือกจุดและผู้บันทึกได้ | 1 | FM02 |
| T10 | แบบข้อมูลและ ID ภายใน | D01 | T02, T04 | ตัวอย่าง records เชื่อมกันและไม่ชนข้ามเครื่อง | 0–1 | FM02/FM03/CM01/CM02 |
| T11 | app shell และ offline readiness | D02 | T05 | เตรียมแล้วเปิดใหม่แบบ offline ได้ | 1 | FM04 |
| T12 | บันทึก check-in ทนต่อการปิดหน้า | D01 | T09, T10, T11 | กรอก 10 คน ปิดเปิดแล้วข้อมูลยังอยู่ | 1 | CM01/FM04 |
| T13 | แก้ข้อมูลและเติมข้อมูลภายหลัง | D01 | T12 | แก้ข้อมูลโดยมีประวัติและไม่เพิ่มคนซ้ำ | 1–2 | CM01/FM03 |
| T14 | คิว sync ที่มองเห็นสถานะ | D02 | T12 | pending/syncing/synced/failed แยกได้ | 1–2 | FM04 |
| T15 | ส่งถึง backend และ retry | D02 | T10, T14 | ส่งซ้ำชุดเดิมแล้วจำนวนคงเดิม | 2 | FM04 |
| T16 | ตรวจและทบทวน record ซ้ำ | D02 | T15 | สองเครื่องลงคนเดียวแล้ว review รวม/แยกพร้อมเหตุผล | 2 | CM01/CM02/FM03/FM04 |
| T17 | ยอดคน ความจุ และย้ายออก | D03 | T04, T12 | เข้า/ออก/ย้าย/merge ทำให้ยอดตรง | 1–2 | CM02 |
| T18 | บันทึก stock และเวลาพอใช้ | D04 | T06, T17 | ระบุหน่วย สมมติฐาน และ unknown stock ได้ | 2 | CM03 |
| T19 | คำขอและสถานะรับของ | D04 | T18 | ขอ→รับทราบ→ส่ง→รับแล้ว พร้อมยกเลิกได้ | 2 | CM03 |
| T20 | dashboard จากข้อมูลส่งถึงจริง | D05 | T15, T17, T19 | ยอดและ need ตรงกับชุดทดสอบ | 2 | CM04 |
| T21 | แสดงข้อมูลเก่าและรอ sync | D05 | T20 | เวลาล่าสุดชัด ไม่แสดงของเก่าเป็นสด | 2 | CM04/FM04 |
| T22 | family safety แบบจำกัด | D06 | T03, T15 | ตรง/ใกล้เคียง/ไม่พบ/รอ sync มีคำตอบตามกฎ | 2 | CM05 |
| T23 | สิทธิ์เข้าถึงและข้อมูลในเครื่อง | D13 | T03, T08, T10 | ทดสอบผู้ไม่มีสิทธิ์และเครื่องใช้ร่วมกันตามขอบเขตทดลอง | 1–2; ขยายทุกระยะ | FM01/FM03/FM04 |
| T24 | demo เชื่อมปลายทางครบ | D05 | T16, T21, T22, T23 | ผ่าน scenario ใน MVP Pack พร้อมหลักฐาน | 2 | Core end-to-end |
| T25 | ทบทวน flow กับเจ้าหน้าที่ | D13 | T01 | บันทึกข้อสังเกตผู้ปฏิบัติงานจริงและสิ่งที่ต้องแก้ | 0; ทบทวนทุก release | Domain validation |
| T26 | ซ้อมบนอุปกรณ์เป้าหมาย | D02 | T24 | บันทึกผล offline/reopen/retry/conflict บนอุปกรณ์จริง | 1–2 | Device/field QA |
| T27 | ตกลงพื้นที่และเจ้าของ pilot | D13 | T08, T25 | ชื่อคนรับผิดชอบ พื้นที่ และเงื่อนไขทดลอง | 0 | Pilot owner/site |
| T28 | ทบทวนข้อมูลส่วนบุคคลและอำนาจหน้าที่ | D13 | T03, T07, T27 | ผู้รับผิดชอบทบทวนข้อมูลที่เก็บ เปิดเผย และระยะเก็บ | 0; รับรองก่อนใช้ข้อมูลจริง | Authority/Privacy |
| T29 | ตรวจตัวเลขและเรื่องเล่าที่จะใช้ | D14 | T08 | ทุก claim ที่เลือกใช้มีแหล่ง วันที่ หน่วย และขอบเขต | 0; ก่อนเผยแพร่ claim | Research/Communication |
| T30 | คู่มือและแผนเมื่อระบบขัดข้อง | D13 | T26, T27, T28 | เจ้าหน้าที่ซ้อมสำรอง/กู้คืนและติดต่อคนดูแลได้ | 2; ขยายใน 5 | Fallback/Recovery/Support |
| T31 | signal ก่อน ICP | D07 | T24 | เลือกหนึ่งช่องทางและมีหลักฐานความเป็นไปได้ | 3A | XM01 |
| T32 | helper/resource onboarding | D08 | T24 | เลือกหนึ่ง intake type และเชื่อมถึง board | 3A | XM02/XM03 |
| T33 | mission และภาพพื้นที่ | D09 | T32 | กำหนดหนึ่ง request→mission→report flow | 3B | XM04/XM05/XM06 |
| T34 | medical handoff | D10 | T27 | มีผู้ปฏิบัติงานรับรองขอบเขตการส่งต่อที่จะออกแบบ | 0 ประเมิน owner; 4 พัฒนา | XM07 |
| T35 | donation และ delivery | D11 | T19, T32 | ทดสอบหนึ่ง lot ถึงผู้รับพร้อมหลักฐาน | 4 | XM08 |
| T36 | aid/insurance/procurement | D12 | T07, T28, T29 | เลือกหนึ่งกระบวนการที่มี owner และเงื่อนไขข้อมูล | 4 | XM09/XM10 |

ข้อเสนอเพิ่มจากการตรวจขอบเขต: T26 ต้องเริ่มทดสอบอุปกรณ์ใน Phase 1 มิใช่รอ end-to-end ครั้งเดียว; งานสิทธิ์/ประวัติ T23 และ recovery ต้องเริ่มพร้อมข้อมูล ส่วน T34 เป็นการหา owner/protocol ตั้งแต่ต้น ก่อนเลือกระยะพัฒนาการส่งต่อ

คอลัมน์ dependency เก็บข้อความต้นทางเพื่อให้ตรวจย้อนกลับ ไม่ถือเป็น dependency ที่รับรองใหม่ทุกแถว หากแพ็กเกจแกนแรกไม่เชื่อมสิทธิ์ช่วยเหลือ งาน privacy/authority ของแกนนั้นใน T28 ต้องปิดก่อนใช้ข้อมูลจริงได้โดยไม่รอ T07/Q07 ของส่วนสิทธิ์ช่วยเหลือ ให้กำหนด dependency ของแพ็กเกจจริงใน Phase 0 ตามขอบเขตที่เลือก

## F. สำเนาซ้ำ รุ่นต่างกัน และการเลือกฉบับหลัก

1. ลดซ้ำเมื่อ SHA-256 ตรงกัน; ชื่อเหมือนกันแต่เนื้อหาต่างต้องรักษา S-ID แยก
2. S067 PreRead มี 4 ที่มาตรงกัน; S069 MVP Pack มี 2 ที่มาตรงกัน; S071 Collected Notes มี 2 ที่มาตรงกัน ไม่เพิ่มรายการพัฒนาจากสำเนา
3. S071 กับ S072 v0.2 เป็นคนละเนื้อหา การมี v0.2 ยังไม่พิสูจน์ว่าทุกเนื้อหารุ่นก่อนถูกยกเลิก
4. S021/S042 เป็น index ของ onepage/deploy ต่างกัน 1 byte; S001 เป็น entry อีกโครงการ; S043/S048 เป็น legacy context อย่าจัดทุก index เป็นโปรแกรมเดียวกันหรือโปรแกรมเพิ่มโดยไม่ดูบริบท
5. S044/S055 onboarding, S045/S056 overview และ S046/S058 skill coordinator เป็น variants ที่เนื้อหาต่างกัน
6. S035 LCCS_PROBLEMS.md ว่าง 0 bytes ไม่เป็น problem backlog ที่มีเนื้อหาแล้ว
7. ชื่อขยาย LCCS และ dates/phase/stack ไม่เหมือนกัน เลือก source baseline ด้วย decision owner ใน Q08 ไม่เลือกจากวันไฟล์อย่างเดียว
8. S026 มี mock matching; Fiscal React ใช้ static data; S051 มีข้อความ readiness/standards ที่ไม่มีหลักฐานทดสอบในคลัง; ไม่คัดลอกเป็นผลสำเร็จ/ความพร้อมจริง

## G. ทะเบียนหลักฐาน 77 เนื้อหาไม่ซ้ำ

ทุกแถวตรวจ existence/hash ตรง manifest ในรอบ TOR จำนวนที่มารวม 112; ตัวเลขนี้ไม่นับโน้ตสังเคราะห์ source cards และ snapshots ที่สร้างเพิ่ม ระดับการอ่านไม่เท่ากับระดับพร้อมใช้

ใน MD ต้นฉบับ ลิงก์หลักฐานชี้ไปเครื่องเจ้าของคลัง ฉบับเว็บนี้แสดงชื่อไฟล์และตำแหน่งภายในคลังเพื่อใช้อ้างอิง การเข้าถึงหลักฐานจริงต้องได้รับสิทธิ์ตามนโยบาย

| ID | ต้นฉบับ | ชนิด/หมวด | bytes | ที่มา | ระดับการอ่านรอบ TOR |
|---|---|---|---:|---:|---|
| S001 | index.html — `90_Originals/S001__index.html` | .html / prototype/เว็บสาธิต | 317 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S002 | package-lock.json — `90_Originals/S002__package-lock.json` | .json / source/config ของ prototype | 107,166 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S003 | package.json — `90_Originals/S003__package.json` | .json / source/config ของ prototype | 641 | 1 | อ่าน source ส่วนที่เกี่ยวข้องกับ app entry/static fiscal data; ไม่ทดสอบ runtime |
| S004 | postcss.config.js — `90_Originals/S004__postcss.config.js` | .js / source/config ของ prototype | 81 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S005 | App.tsx — `90_Originals/S005__App.tsx` | .tsx / source/config ของ prototype | 57,511 | 1 | อ่าน source ส่วนที่เกี่ยวข้องกับ app entry/static fiscal data; ไม่ทดสอบ runtime |
| S006 | index.css — `90_Originals/S006__index.css` | .css / source/config ของ prototype | 693 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S007 | main.tsx — `90_Originals/S007__main.tsx` | .tsx / source/config ของ prototype | 237 | 1 | อ่าน source ส่วนที่เกี่ยวข้องกับ app entry/static fiscal data; ไม่ทดสอบ runtime |
| S008 | ThailandDisasterFiscalBoard.tsx — `90_Originals/S008__ThailandDisasterFiscalBoard.tsx` | .tsx / source/config ของ prototype | 10,893 | 1 | อ่าน source ส่วนที่เกี่ยวข้องกับ app entry/static fiscal data; ไม่ทดสอบ runtime |
| S009 | tailwind.config.js — `90_Originals/S009__tailwind.config.js` | .js / source/config ของ prototype | 378 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S010 | Thailand_Disaster_Fiscal_Board_TH.md — `90_Originals/S010__Thailand_Disaster_Fiscal_Board_TH.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 11,993 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S011 | tsconfig.json — `90_Originals/S011__tsconfig.json` | .json / source/config ของ prototype | 507 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S012 | tsconfig.node.json — `90_Originals/S012__tsconfig.node.json` | .json / source/config ของ prototype | 213 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S013 | vite.config.mjs — `90_Originals/S013__vite.config.mjs` | .mjs / source/config ของ prototype | 136 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S014 | app.js — `90_Originals/S014__app.js` | .js / source/config ของ prototype | 13,576 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S015 | lccs-layer-model.png — `90_Originals/S015__lccs-layer-model.png` | .png / ภาพ/ทรัพย์สินประกอบ | 1,988,460 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S016 | lccs-operational-gis.png — `90_Originals/S016__lccs-operational-gis.png` | .png / ภาพ/ทรัพย์สินประกอบ | 2,057,153 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S017 | lccs-route-map.png — `90_Originals/S017__lccs-route-map.png` | .png / ภาพ/ทรัพย์สินประกอบ | 1,955,649 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S018 | placeholder-map.svg — `90_Originals/S018__placeholder-map.svg` | .svg / ภาพ/ทรัพย์สินประกอบ | 2,009 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S019 | placeholder-network.svg — `90_Originals/S019__placeholder-network.svg` | .svg / ภาพ/ทรัพย์สินประกอบ | 1,665 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S020 | cases.js — `90_Originals/S020__cases.js` | .js / source/config ของ prototype | 21,285 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S021 | index.html — `90_Originals/S021__index.html` | .html / prototype/เว็บสาธิต | 40,705 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S022 | LCCS_Government_Console_API_User_Journey.html — `90_Originals/S022__LCCS_Government_Console_API_User_Journey.html` | .html / prototype/เว็บสาธิต | 27,980 | 3 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S023 | LCCS_Onboarding_Activity_Diagrams.html — `90_Originals/S023__LCCS_Onboarding_Activity_Diagrams.html` | .html / prototype/เว็บสาธิต | 48,194 | 3 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S024 | lccs_phone_simulation_actors.html — `90_Originals/S024__lccs_phone_simulation_actors.html` | .html / prototype/เว็บสาธิต | 20,148 | 3 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S025 | LCCS_Rapid_Onboarding_MCP.html — `90_Originals/S025__LCCS_Rapid_Onboarding_MCP.html` | .html / prototype/เว็บสาธิต | 33,299 | 3 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S026 | lccs_shelter_checkin_family_search.html — `90_Originals/S026__lccs_shelter_checkin_family_search.html` | .html / prototype/เว็บสาธิต | 24,999 | 5 | อ่าน source ส่วน check-in/search mock; ไม่ทดสอบ runtime |
| S027 | LCCS_Stakeholder_Registration_ORC_Chart.html — `90_Originals/S027__LCCS_Stakeholder_Registration_ORC_Chart.html` | .html / prototype/เว็บสาธิต | 30,218 | 3 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S028 | README.md — `90_Originals/S028__README.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 4,376 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S029 | styles.css — `90_Originals/S029__styles.css` | .css / source/config ของ prototype | 29,751 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S030 | LCCS_20_Slide_Pitch_Deck.html — `90_Originals/S030__LCCS_20_Slide_Pitch_Deck.html` | .html / prototype/เว็บสาธิต | 113,724 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S031 | LCCS_Government_Console_API_User_Journey_mobile_preview.png — `90_Originals/S031__LCCS_Government_Console_API_User_Journey_mobile_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 52,449 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S032 | LCCS_Government_Console_API_User_Journey_preview.png — `90_Originals/S032__LCCS_Government_Console_API_User_Journey_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 210,587 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S033 | LCCS_Onboarding_Activity_Diagrams_mobile_preview.png — `90_Originals/S033__LCCS_Onboarding_Activity_Diagrams_mobile_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 55,150 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S034 | LCCS_Onboarding_Activity_Diagrams_preview.png — `90_Originals/S034__LCCS_Onboarding_Activity_Diagrams_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 150,282 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S035 | LCCS_PROBLEMS.md — `90_Originals/S035__LCCS_PROBLEMS.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 0 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S036 | LCCS_Rapid_Onboarding_MCP_mobile_preview.png — `90_Originals/S036__LCCS_Rapid_Onboarding_MCP_mobile_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 62,941 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S037 | LCCS_Rapid_Onboarding_MCP_preview.png — `90_Originals/S037__LCCS_Rapid_Onboarding_MCP_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 263,697 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S038 | LCCS_Rapid_Onboarding_v0.1.md — `90_Originals/S038__LCCS_Rapid_Onboarding_v0.1.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 14,638 | 1 | อ่านส่วนที่เกี่ยวข้องกับขอบเขต/flow; ไม่ยืนยันข้อกล่าวอ้างภายนอก |
| S039 | LCCS_Stakeholder_Registration_ORC_Chart_mobile_preview.png — `90_Originals/S039__LCCS_Stakeholder_Registration_ORC_Chart_mobile_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 68,751 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S040 | LCCS_Stakeholder_Registration_ORC_Chart_preview.png — `90_Originals/S040__LCCS_Stakeholder_Registration_ORC_Chart_preview.png` | .png / ภาพ/ทรัพย์สินประกอบ | 214,263 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S041 | LCCS_USSD_Response_Protocol_v0.1.md — `90_Originals/S041__LCCS_USSD_Response_Protocol_v0.1.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 8,582 | 1 | อ่านต้นฉบับข้อความรอบ TOR |
| S042 | index.html — `90_Originals/S042__index.html` | .html / prototype/เว็บสาธิต | 40,704 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S043 | index_v1.html — `90_Originals/S043__index_v1.html` | .html / prototype/เว็บสาธิต | 51,435 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S044 | lccs-onboarding.html — `90_Originals/S044__lccs-onboarding.html` | .html / prototype/เว็บสาธิต | 36,606 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S045 | lccs-overview.html — `90_Originals/S045__lccs-overview.html` | .html / prototype/เว็บสาธิต | 25,645 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S046 | lccs-skill-coord.html — `90_Originals/S046__lccs-skill-coord.html` | .html / prototype/เว็บสาธิต | 33,704 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S047 | lccs_scenario_walkthrough.html — `90_Originals/S047__lccs_scenario_walkthrough.html` | .html / prototype/เว็บสาธิต | 20,021 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S048 | index_1.html — `90_Originals/S048__index_1.html` | .html / prototype/เว็บสาธิต | 57,128 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S049 | LCCS MVP — Domain - Actor - Module Matrix.pdf — `90_Originals/S049__LCCS MVP — Domain - Actor - Module Matrix.pdf` | .pdf / เอกสาร PDF | 43,055 | 1 | อ่านข้อความ PDF ครบ 3 หน้า |
| S050 | LCCS Research.md — `90_Originals/S050__LCCS Research.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 25,559 | 1 | อ่านส่วนที่เกี่ยวข้องกับขอบเขต/flow; ไม่ยืนยันข้อกล่าวอ้างภายนอก |
| S051 | LCCS Strategic UX Presentation.pdf — `90_Originals/S051__LCCS Strategic UX Presentation.pdf` | .pdf / เอกสาร PDF | 1,820,195 | 1 | render และดู PDF ครบ 13 หน้า; เป็นภาพ ไม่ใช่ text layer |
| S052 | lccs-full.html — `90_Originals/S052__lccs-full.html` | .html / prototype/เว็บสาธิต | 50,508 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S053 | lccs-github-site.zip — `90_Originals/S053__lccs-github-site.zip` | .zip / archive/package | 129,563 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S054 | LCCS-Investor-Pitch-V2.pptx — `90_Originals/S054__LCCS-Investor-Pitch-V2.pptx` | .pptx / สไลด์นำเสนอ | 741,215 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S055 | lccs-onboarding.html — `90_Originals/S055__lccs-onboarding.html` | .html / prototype/เว็บสาธิต | 35,434 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S056 | lccs-overview.html — `90_Originals/S056__lccs-overview.html` | .html / prototype/เว็บสาธิต | 24,917 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S057 | LCCS-Pitch-Deck.pptx — `90_Originals/S057__LCCS-Pitch-Deck.pptx` | .pptx / สไลด์นำเสนอ | 264,827 | 4 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S058 | lccs-skill-coord.html — `90_Originals/S058__lccs-skill-coord.html` | .html / prototype/เว็บสาธิต | 33,132 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S059 | lccs_01_the_crisis_gap.png — `90_Originals/S059__lccs_01_the_crisis_gap.png` | .png / ภาพ/ทรัพย์สินประกอบ | 86,136 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S060 | lccs_02_one_disaster_many_actors.png — `90_Originals/S060__lccs_02_one_disaster_many_actors.png` | .png / ภาพ/ทรัพย์สินประกอบ | 84,968 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S061 | lccs_03_mapping_the_aid_operation.png — `90_Originals/S061__lccs_03_mapping_the_aid_operation.png` | .png / ภาพ/ทรัพย์สินประกอบ | 87,675 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S062 | lccs_04_designing_shared_humanitarian_visibility.png — `90_Originals/S062__lccs_04_designing_shared_humanitarian_visibility.png` | .png / ภาพ/ทรัพย์สินประกอบ | 106,797 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S063 | lccs_05_system_value.png — `90_Originals/S063__lccs_05_system_value.png` | .png / ภาพ/ทรัพย์สินประกอบ | 83,321 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S064 | lccs_case_study_assets_4x3.zip — `90_Originals/S064__lccs_case_study_assets_4x3.zip` | .zip / archive/package | 415,922 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S065 | LCCS_DataFlow.html — `90_Originals/S065__LCCS_DataFlow.html` | .html / prototype/เว็บสาธิต | 22,937 | 2 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S066 | lccs_evidence_decision_layer.svg — `90_Originals/S066__lccs_evidence_decision_layer.svg` | .svg / ภาพ/ทรัพย์สินประกอบ | 8,100 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S067 | LCCS_Journey_PreRead.md — `90_Originals/S067__LCCS_Journey_PreRead.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 9,420 | 4 | อ่านส่วนที่เกี่ยวข้องกับขอบเขต/flow; ไม่ยืนยันข้อกล่าวอ้างภายนอก |
| S068 | lccs_landing_mockup_full.html — `90_Originals/S068__lccs_landing_mockup_full.html` | .html / prototype/เว็บสาธิต | 21,587 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S069 | LCCS_MVP_PACK (1).md — `90_Originals/S069__LCCS_MVP_PACK (1).md` | .md / เอกสาร/แนวคิด/งานวิจัย | 20,659 | 2 | อ่านต้นฉบับข้อความรอบ TOR |
| S070 | LCCS_MVP_System_Relationship_For_Vut.md — `90_Originals/S070__LCCS_MVP_System_Relationship_For_Vut.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 18,896 | 1 | อ่านต้นฉบับข้อความรอบ TOR |
| S071 | LCCS_Project_Collected_Notes (1).md — `90_Originals/S071__LCCS_Project_Collected_Notes (1).md` | .md / เอกสาร/แนวคิด/งานวิจัย | 53,434 | 2 | อ่านบางส่วนรอบ TOR |
| S072 | LCCS_Project_Collected_Notes_v0.2.md — `90_Originals/S072__LCCS_Project_Collected_Notes_v0.2.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 41,018 | 1 | อ่านบางส่วนรอบ TOR |
| S073 | LCCS_Project_Size_and_Scope_v0.1.md — `90_Originals/S073__LCCS_Project_Size_and_Scope_v0.1.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 25,909 | 1 | อ่านต้นฉบับข้อความรอบ TOR |
| S074 | lccs_review_findings.html — `90_Originals/S074__lccs_review_findings.html` | .html / prototype/เว็บสาธิต | 17,961 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S075 | LCCS_Service_Blueprint.pdf — `90_Originals/S075__LCCS_Service_Blueprint.pdf` | .pdf / เอกสาร PDF | 37,971 | 1 | อ่านข้อความ PDF ครบ 2 หน้า |
| S076 | lccs_stakeholder_mindmap.html — `90_Originals/S076__lccs_stakeholder_mindmap.html` | .html / prototype/เว็บสาธิต | 9,142 | 1 | Inventory/manifest; ไม่ได้อ่านต้นฉบับครบ |
| S077 | LCCS_Summary.md — `90_Originals/S077__LCCS_Summary.md` | .md / เอกสาร/แนวคิด/งานวิจัย | 17,471 | 1 | อ่านต้นฉบับข้อความรอบ TOR |

## H. วิธีใช้ภาคผนวกทบทวนขอบเขต

เริ่มจาก D ของปัญหาที่ต้องแก้ → เทียบโมดูล TOR และโปรแกรม → อ่าน S ที่เป็นหลักฐาน → ปิด Q ที่เกี่ยวข้อง → เลือก T และ acceptance cases ที่ต้องส่งมอบในแพ็กเกจนั้น ทุก requirement ใหม่ให้ระบุว่าเป็นข้อเสนอ พร้อม owner/phase/test ไม่เพิ่มจากชื่อไฟล์หรือโหนดที่อยู่ใกล้กันในกราฟเพียงอย่างเดียว

เมื่อรับรอง scope ให้ลง source baseline, ผู้ตัดสินใจ วันที่ เหตุผล และรายการที่ไม่รวม แล้วจึงเติมราคา ระยะเวลา งวดส่งมอบและเงื่อนไขสัญญาใน TOR หลัก
