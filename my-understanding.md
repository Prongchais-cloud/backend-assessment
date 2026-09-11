## AI Code Contribution
2 Point 

## Backend

1. GET จะดึงข้อมูลไปอย่างเดียว, POST จะสร้าง object ใหม่บน database ผ่าน backend โดยมี user ใส่ข้อมูลผ่าน frontend, PUT จะเปลี่ยนข้อมูลที่มีอยู่แล้วตามที่ได้รับข้อมูลจาก user ที่ frontend, DELETE จะลบ object ข้อมูลนั้นนั้นออก โดยชี้ไปที่ข้อมูลนั้นด้วย _id

2. ถ้าหากไม่ใส่ `express.json()` จะทำให้ server ไม่สามารถแปลง text object เป็น json ได้

3. `req.body` จะดึงข้อมูลจาก request ที่ได้มาจาก frontend ซึ่งจะบรรจุข้อมูลที่ user ใส่มา เช่น create route: จะดึงเอาข้อมูลจาก user ผ่าน req.body แล้วเอาไปสร้าง object ใหม่และส่งไป database, `req.params` จะดึงข้อมูลจาก Url ที่ได้รับจากมา เช่น update route: จะดึงเอา _id จาก Url เพื่อชี้ไปหา object นั้นนั้น ก่อนจะเอาข้อมูลที่ได้ผ่าน req.body ไปแทนที่ข้อมูลเดิม, `req.query` จะเก็บข้อมูลที่อยู่หลัง ? บน url เช่น ใน sortProduct middleware ที่จะใช้ req.query เก็บข้อมูลหลัง ? เพื่อที่จะใช้ในการทำ logic sort

4. 200 คือ ok ไม่มีปัญหา ใช้ในแต่ละ route ที่ทำงานเองโดยไม่ต้องมีผู้ใช้ tricker, 201 คือ Accept ใช้ใน route ที่ผู้ใช้งานต้องการส่งข้อมูลมา, 400 คือ bad request ใช้ตอนที่ข้อมูลจากผู้ใช้งานไม่ตรงกับความต้องการของ server, 404 คือ not found ใช้เมื่อ ไม่สามารถหาข้อมูลบน database ได้

5. middleware คือ ก้อนของระบบการทำงานที่จะทำอย่างใดอย่างหนึ่ง เช่น Read all middleware จะทำหน้าที่ดึงข้อมูลทั้งหมดส่งให้กับ client เท่านั้น ไม่ทำอย่างอื่นเพิ่ม

6. เพราะบาง middleware จะเป็นต้องได้รับข้อมูลจาก middleware ก่อนหน้า ถ้าหากเรียงผิด middleware ก็จะทำงานผิดพลาด

7. server จะได้รับข้อมูลจาก req.body ซึ่งจะมี name, price, quantity จากนั้นจะเช็คข้อมูลว่าโอเคไหม และส่งไปสร้างที่ database ผ่าน schema 

8. CRUD คือ Create = POST ใช้กับ route Create product, Read = GET ใช้กับ route Read all product และ Read one product, Update = PUT ใช้กับ route Update product, Delete = DELETE ใช้กับ route Delete peoduct

9. จะส่ง json ให้โดยมีข้อความ error ให้กับผู้ส่ง request

10. CORS คือ ระบบความปลอดภัยในการรับ request ถ้าไม่มี ผู้ส่งจะได้รับ error 

11. fetch ข้อมูลจาก fetchData.js และ ใช้ useEffect เพื่อที่เวลาที่ getProduct ถูกเรียก ข้อมูลจะถูก fetch ทันที

12. .env เพื่อความปลอดภัย เนื่องจากหาก hardcode ไว้ คนอื่นที่เข้ามาดูจะเห็น api ของเราด้วย

13. ปุ่ม DELETE ระบบจะดึงข้อมูล _id แล้วส่งไปให้ server ด้วย DELETE method ตัว server ลบข้อมูลที่มี _id ตรงกันออก และ frontend จะ fetch ข้อมูลอีกรอบเพื่อ update ข้อมูลใหม่

14. แสดง Loading product...

15. ใช้วิธีการดึงข้อมูลใหม่จาก server

16. การ update เนื่องจาก getProduct ที่ถูกเรียกที่ Home page ใช้ไม่ได้ส่งข้อมูลให้ Update page

17. ผมใช้ AI ในการเช็ค bug และ สร้างบาง code ที่ไม่รู้จะสร้างอย่างไร เช่น check bug this folder, explain to me but dont change anything

18. การเชื่อมข้อมูล Home page กับ update page เนื่องจากผมไม่รู้ต้องทำอย่างไร

19. import error อ่านใน terminal แล้วมันแจ้งว่าหาไฟล์ไม่เจอ แล้วคิดได้ว่าลืมใส่ .js ให้ใน path

20. sortProducts middleware จะดึงข้อมูลหลัง ? ด้วย req.query และเอาไปจัดเรียงข้อมูล