import React, { useState } from 'react';
import Link from 'next/link';
import {Carousel, Button, Drawer } from 'antd'
import {BugTwoTone, CarTwoTone} from '@ant-design/icons'



export const FakeData = [
    {"ID":1,"NUMBER_ASSET":"พย7110-006-024-335","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1323","OLD_PLACE":"ICT1323"},{"ID":2,"NUMBER_ASSET":"พย7110-006-024-327","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1323","OLD_PLACE":"ICT1328"},{"ID":3,"NUMBER_ASSET":"พย7110-006-024-336","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.กมลพร ฉิมพาลี","PLACE":"ICT1327","OLD_PLACE":"ICT1324"},{"ID":4,"NUMBER_ASSET":"พย7110-006-024-343","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ผศ.ดร.นครินทร์ ชัยแก้ว","PLACE":"ICT1326","OLD_PLACE":"ICT1323"},{"ID":5,"NUMBER_ASSET":"พย7110-006-024-342","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ผศ.ดร.บุญศิริ สุขพร้อมสรรพ์","PLACE":"ICT1324","OLD_PLACE":"ICT1324"},{"ID":6,"NUMBER_ASSET":"พย7110-006-024-337","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1323","OLD_PLACE":"ICT1328"},{"ID":7,"NUMBER_ASSET":"พย7110-006-024-338","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.สวรินทร์ ฤกษ์อยู่สุข","PLACE":"ICT1331","OLD_PLACE":"ICT1329"},{"ID":8,"NUMBER_ASSET":"พย7110-006-024-341","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1328"},{"ID":9,"NUMBER_ASSET":"พย7110-006-024-340","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1328"},{"ID":10,"NUMBER_ASSET":"พย7110-006-024-339","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.เกวรินทร์ จันทร์ดำ","PLACE":"ICT1343","OLD_PLACE":"ICT1340"},{"ID":11,"NUMBER_ASSET":"พย7110-006-024-324","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.นิติ เอี่ยมชื่น","PLACE":"ICT1332","OLD_PLACE":"ICT1324"},{"ID":12,"NUMBER_ASSET":"พย7110-006-024-334","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ผศ.ดร.ไพศาล จี้ฟู","PLACE":"ICT1325","OLD_PLACE":"ICT1434"},{"ID":13,"NUMBER_ASSET":"พย7110-006-024-310","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1340","OLD_PLACE":"ICT1419"},{"ID":14,"NUMBER_ASSET":"พย7110-006-024-325","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.นภา ราชตา","PLACE":"ICT1336","OLD_PLACE":"ICT1346"},{"ID":15,"NUMBER_ASSET":"พย7110-006-024-312","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1328"},{"ID":16,"NUMBER_ASSET":"พย7110-006-024-349","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1323","OLD_PLACE":"ICT1324"},{"ID":17,"NUMBER_ASSET":"พย7110-006-024-357","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1334","OLD_PLACE":"ICT1334"},{"ID":18,"NUMBER_ASSET":"พย7110-006-024-359","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1323","OLD_PLACE":"ICT1325"}
    // ,{"ID":19,"NUMBER_ASSET":"พย7110-006-024-306","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.นิติ เอี่ยมชื่น","PLACE":"ICT1332","OLD_PLACE":"ICT1328"},{"ID":20,"NUMBER_ASSET":"พย7110-006-024-332","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1435"},{"ID":21,"NUMBER_ASSET":"พย7110-006-024-315","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1342"},{"ID":22,"NUMBER_ASSET":"พย7110-006-024-348","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายวราพงษ์ คล่องแคล่ว","PLACE":"ICT1419","OLD_PLACE":"ICT1323"},{"ID":23,"NUMBER_ASSET":"พย7110-006-024-347","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1429","OLD_PLACE":"ICT1419"},{"ID":24,"NUMBER_ASSET":"พย7110-006-024-351","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.ปรัชญา นวนแก้ว","PLACE":"ICT1339","OLD_PLACE":"ICT1334"},{"ID":25,"NUMBER_ASSET":"พย7110-006-024-352","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.นิติ เอี่ยมชื่น","PLACE":"ICT1332","OLD_PLACE":"ICT1336"},{"ID":26,"NUMBER_ASSET":"พย7110-006-024-346","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1429","OLD_PLACE":"ICT1434"},{"ID":27,"NUMBER_ASSET":"พย7110-006-024-345","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1334","OLD_PLACE":"ICT1334"},{"ID":28,"NUMBER_ASSET":"พย7110-006-024-353","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1328"},{"ID":29,"NUMBER_ASSET":"พย7110-006-024-354","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":30,"NUMBER_ASSET":"พย7110-006-024-363","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1334","OLD_PLACE":"ICT1334"},{"ID":31,"NUMBER_ASSET":"พย7110-006-024-362","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.เกวรินทร์ จันทร์ดำ","PLACE":"ICT1343","OLD_PLACE":"ICT1334"},{"ID":32,"NUMBER_ASSET":"พย7110-006-024-355","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1323","OLD_PLACE":"ICT1323"},{"ID":33,"NUMBER_ASSET":"พย7110-006-024-356","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1340","OLD_PLACE":"ICT1334"},{"ID":34,"NUMBER_ASSET":"พย7110-006-024-361","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1439","OLD_PLACE":"ICT1434"},{"ID":35,"NUMBER_ASSET":"พย7110-006-024-360","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.พรเทพ โรจนวสุ","PLACE":"ICT1414","OLD_PLACE":"ICT1413/1"},{"ID":36,"NUMBER_ASSET":"พย7110-006-024-350","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1328"}
    // ,{"ID":37,"NUMBER_ASSET":"พย7110-006-024-319","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.สวรินทร์ ฤกษ์อยู่สุข","PLACE":"ICT1331","OLD_PLACE":"ICT1419"},{"ID":38,"NUMBER_ASSET":"พย7110-006-024-358","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT13268"},{"ID":39,"NUMBER_ASSET":"พย7110-006-024-314","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1429","OLD_PLACE":"ICT1419"},{"ID":40,"NUMBER_ASSET":"พย7110-006-024-305","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":41,"NUMBER_ASSET":"พย7110-006-024-311","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1323","OLD_PLACE":"ICT1434"},{"ID":42,"NUMBER_ASSET":"พย7110-006-024-316","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1419"},{"ID":43,"NUMBER_ASSET":"พย7110-006-024-320","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1329"},{"ID":44,"NUMBER_ASSET":"พย7110-006-024-317","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1329","OLD_PLACE":"ICT1329"},{"ID":45,"NUMBER_ASSET":"พย7110-006-024-333","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,350.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายภานุวัฒน์ โลมากุล","PLACE":"ICT1312","OLD_PLACE":"ICT1323"},{"ID":46,"NUMBER_ASSET":"พย7195-005-022","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"1,179.14","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1318"},{"ID":47,"NUMBER_ASSET":"พย7195-005-1690","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1439","OLD_PLACE":"ICT1439"},{"ID":48,"NUMBER_ASSET":"พย7195-005-1717","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1439","OLD_PLACE":"ICT1407/1"},{"ID":49,"NUMBER_ASSET":"พย7195-005-1718","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1328"},{"ID":50,"NUMBER_ASSET":"พย7195-005-1719","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ผศ.ดร.รังสรรค์ เกตุอ๊อต","PLACE":"ICT1333","OLD_PLACE":"ICT1328"},{"ID":51,"NUMBER_ASSET":"พย7195-005-1720","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1328","OLD_PLACE":"ICT1328"},{"ID":52,"NUMBER_ASSET":"พย7195-005-1722","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1307","OLD_PLACE":"ICT1439"},{"ID":53,"NUMBER_ASSET":"พย7195-005-1724","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1307","OLD_PLACE":"ICT1408"},{"ID":54,"NUMBER_ASSET":"พย7195-005-1726","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1303","OLD_PLACE":"ICT1434"}
    // ,{"ID":55,"NUMBER_ASSET":"พย7195-005-1727","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1335","OLD_PLACE":"ICT1334"},{"ID":56,"NUMBER_ASSET":"พย7195-005-1728","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1307","OLD_PLACE":"ICT1408"},{"ID":57,"NUMBER_ASSET":"พย7195-005-1730","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ผศ.ดร.รังสรรค์ เกตุอ๊อต","PLACE":"ICT1334","OLD_PLACE":"ICT1328"},{"ID":58,"NUMBER_ASSET":"พย7195-005-1731","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายเชาวน์ ปอแก้ว","PLACE":"ICT1232","OLD_PLACE":"ICT1229"},{"ID":59,"NUMBER_ASSET":"พย7195-005-1732","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายรณชัย ทิพย์มณฑา","PLACE":"ICT1307","OLD_PLACE":"ICT1318"},{"ID":60,"NUMBER_ASSET":"พย7195-005-1733","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นางโกลัญญา ตายะ","PLACE":"ICT1307","OLD_PLACE":"ICT1328"},{"ID":61,"NUMBER_ASSET":"พย7195-005-1734","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1340","OLD_PLACE":"ICT1340"},{"ID":62,"NUMBER_ASSET":"พย7195-005-1736","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1307","OLD_PLACE":"ICT1334"},{"ID":63,"NUMBER_ASSET":"พย7195-005-1737","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"2,600.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1413","OLD_PLACE":"ICT1439"},{"ID":64,"NUMBER_ASSET":"พย7195-005-2084","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1340","OLD_PLACE":"ICT1340"},{"ID":65,"NUMBER_ASSET":"พย7195-005-2085","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1307","OLD_PLACE":"ICT1307"},{"ID":66,"NUMBER_ASSET":"พย7195-005-2087","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1334","OLD_PLACE":"ICT1334"},{"ID":67,"NUMBER_ASSET":"พย7195-005-2916","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1434"},{"ID":68,"NUMBER_ASSET":"พย7195-005-2920","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1307","OLD_PLACE":"ICT1307"},{"ID":69,"NUMBER_ASSET":"พย7195-005-2921","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":70,"NUMBER_ASSET":"พย7195-005-2923","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":71,"NUMBER_ASSET":"พย7195-005-2926","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":72,"NUMBER_ASSET":"พย7195-005-2928","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"}
    // ,{"ID":73,"NUMBER_ASSET":"พย7195-005-2930","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1334","OLD_PLACE":"ICT1334"},{"ID":74,"NUMBER_ASSET":"พย7195-005-2932","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1439","OLD_PLACE":"ICT1328"},{"ID":75,"NUMBER_ASSET":"พย7195-005-2933","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1340","OLD_PLACE":"ICT1340"},{"ID":76,"NUMBER_ASSET":"พย7195-005-2938","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":77,"NUMBER_ASSET":"พย7195-005-2939","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1340","OLD_PLACE":"ICT1340"},{"ID":78,"NUMBER_ASSET":"พย7195-005-2948","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":79,"NUMBER_ASSET":"พย7195-005-2954","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":80,"NUMBER_ASSET":"พย7195-005-2956","NAME_ASSET":"โต๊ะคอมพิวเตอร์","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"3,800.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":null,"INSPECTION_RESULTS":"/","OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1346"},{"ID":81,"NUMBER_ASSET":"พย7670-004-154","NAME_ASSET":"เครื่องพิมพ์เลเซอร์","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"8,500.00","BRAND":"Samsung","MODEL":"ML-2851ND","MACHINE_NUMBER":"4F75BKDZ500629L","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1434","OLD_PLACE":"ICT1434"},{"ID":82,"NUMBER_ASSET":"พย7450-010-355","NAME_ASSET":"CPU","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"35,000.00","BRAND":"Acer","MODEL":"Power sd","MACHINE_NUMBER":"Q108457","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายอภิวัฒน์ วิทยารัฐ","PLACE":"ICT1404","OLD_PLACE":"ICT1442"},{"ID":83,"NUMBER_ASSET":"พย7450-010-361","NAME_ASSET":"CPU","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"35,000.00","BRAND":"Acer","MODEL":"Power sd","MACHINE_NUMBER":"Q108459","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายอภิวัฒน์ วิทยารัฐ","PLACE":"ICT1404","OLD_PLACE":"ICT1442"},{"ID":84,"NUMBER_ASSET":"พย7110-018-034","NAME_ASSET":"ตู้เอกสาร 2 บาน","VALUE_ASSET":1,"UNIT":"ตู้","COST_ASSET":"3,300.00","BRAND":"TAIYO","MODEL":"LK-100","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1303","OLD_PLACE":"ICT1303"},{"ID":85,"NUMBER_ASSET":"พย7110-018-035","NAME_ASSET":"ตู้เอกสาร 2 บาน","VALUE_ASSET":1,"UNIT":"ตู้","COST_ASSET":"3,300.00","BRAND":"TAIYO","MODEL":"LK-100","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1303","OLD_PLACE":"ICT1303"},{"ID":86,"NUMBER_ASSET":"พย7110-018-036","NAME_ASSET":"ตู้เอกสาร 2 บาน","VALUE_ASSET":1,"UNIT":"ตู้","COST_ASSET":"3,300.00","BRAND":"TAIYO","MODEL":"LK-100","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ดร.ภูวิศสรณ์ ภูมิสรณคมณ์","PLACE":"ICT1422","OLD_PLACE":"ICT1407/1"},{"ID":87,"NUMBER_ASSET":"พย7110-029-021","NAME_ASSET":"ตู้เอกสาร 15 ลิ้นชัก","VALUE_ASSET":1,"UNIT":"ตู้","COST_ASSET":"3,100.00","BRAND":"TAIYO","MODEL":"FR-915","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.นภัทร ไชยมงคล","PLACE":"ICT1307","OLD_PLACE":"ICT1307"},{"ID":88,"NUMBER_ASSET":"พย4110-001-017","NAME_ASSET":"ตู้เย็น","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"6,350.00","BRAND":"HITACHI","MODEL":"R - 49PP","MACHINE_NUMBER":"4341200472","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1434","OLD_PLACE":"ICT1328"},{"ID":89,"NUMBER_ASSET":"พย7195-005-101","NAME_ASSET":"โต๊ะคอมพิวเตอร์ใหญ่","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"9,700.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.นภัสวรรณ คำอิสสระ","PLACE":"ICT1318","OLD_PLACE":"ICT1318"},{"ID":90,"NUMBER_ASSET":"พย7195-005-102","NAME_ASSET":"โต๊ะคอมพิวเตอร์ใหญ่","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"9,700.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1346","OLD_PLACE":"ICT1424"}
    // ,{"ID":91,"NUMBER_ASSET":"พย7125-002-083","NAME_ASSET":"ตู้เอกสาร ไม่มีกระจก 4 ชั้น","VALUE_ASSET":1,"UNIT":"ตู้","COST_ASSET":"18,500.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ผศ.ดร.ไพศาล จี้ฟู","PLACE":"ICT1325","OLD_PLACE":"ICT1325"},{"ID":92,"NUMBER_ASSET":"พย7125-002-084","NAME_ASSET":"ตู้เอกสาร ไม่มีกระจก 4 ชั้น","VALUE_ASSET":1,"UNIT":"ตู้","COST_ASSET":"1,200.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.วันเพ็ญ ถาวรโชติ","PLACE":"ICT1302","OLD_PLACE":"ICT1307"},{"ID":93,"NUMBER_ASSET":"พย7670-004-204","NAME_ASSET":"เครื่องปริ้นเตอร์","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"9,630.00","BRAND":"Lexmark","MODEL":"E260dn","MACHINE_NUMBER":"72LN8B9","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายดวิษ แสนโภชน์","PLACE":"ICT1231","OLD_PLACE":"ICT1229"},{"ID":94,"NUMBER_ASSET":"พย7670-004-205","NAME_ASSET":"เครื่องปริ้นเตอร์","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"9,630.00","BRAND":"Lexmark","MODEL":"E260dn","MACHINE_NUMBER":"72LN88M","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1303","OLD_PLACE":"ICT1303"},{"ID":95,"NUMBER_ASSET":"พย7105-001-001-250","NAME_ASSET":"โต๊ะทำงาน","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"18,500.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายคมกริช มาเที่ยง","PLACE":"ICT1412","OLD_PLACE":"ICT1410"},{"ID":96,"NUMBER_ASSET":"พย7105-001-001-249","NAME_ASSET":"โต๊ะทำงาน","VALUE_ASSET":1,"UNIT":"ตัว","COST_ASSET":"18,500.00","BRAND":"-","MODEL":"-","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"ว่าที่ ร.ต.ญ. หนึ่งฤทัย เตชะ","PLACE":"ICT1412","OLD_PLACE":"ICT1410"},{"ID":97,"NUMBER_ASSET":"พย5915-005-001-001","NAME_ASSET":"อุปกรณ์ค้นหาเส้นทางอัตโนมัติ","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"1,118,000.00","BRAND":"Cisco","MODEL":"2620","MACHINE_NUMBER":"JMX0620K36Y","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.อดิศยา เจริญผล, นายธวัชชัย แสนแก้ว","PLACE":"ICT1402","OLD_PLACE":"ICT1405"},{"ID":98,"NUMBER_ASSET":"พย6730-014-004-009","NAME_ASSET":"อุปกรณ์สลับสัญญาณ 12 port","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"1,118,000.00","BRAND":"Cisco Cata3yst","MODEL":"2950","MACHINE_NUMBER":"Foco618z22r","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.อดิศยา เจริญผล, นายธวัชชัย แสนแก้ว","PLACE":"ICT1405","OLD_PLACE":"ICT1405"},{"ID":99,"NUMBER_ASSET":"พย7450-012-018","NAME_ASSET":"อุปกรณ์สลับสัญญาณ12port(เครื่องแยกสัญญาณ)","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"504,700.00","BRAND":"Cisco","MODEL":"Catalyst2950","MACHINE_NUMBER":"Foco618z22u","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.อดิศยา เจริญผล, นายธวัชชัย แสนแก้ว","PLACE":"ICT1405","OLD_PLACE":"ICT1405"},{"ID":100,"NUMBER_ASSET":"พย6720-010-015","NAME_ASSET":"เครื่องฉายภาพวิดีโอ โปรเจคเตอร์ ขนาด 2000 ANSI","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"253,800.00","BRAND":"Sony","MODEL":"VPL-CX5","MACHINE_NUMBER":"10629","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.อดิศยา เจริญผล, นายธวัชชัย แสนแก้ว","PLACE":"ICT1405","OLD_PLACE":"ICT1405"},{"ID":101,"NUMBER_ASSET":"พย6730-002-009","NAME_ASSET":"จอรับภาพขนาด 100 นิ้ว แบบมือดึง","VALUE_ASSET":1,"UNIT":"อัน","COST_ASSET":"124,000.00","BRAND":"DA-LITE","MODEL":"70870","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"น.ส.อดิศยา เจริญผล, นายธวัชชัย แสนแก้ว","PLACE":"ICT1405","OLD_PLACE":"ICT1403"},{"ID":102,"NUMBER_ASSET":"พย5835-001-025","NAME_ASSET":"เครื่องขยายเสียง ขนาด 120 วัตต์","VALUE_ASSET":1,"UNIT":"เครื่อง","COST_ASSET":"10,380.00","BRAND":"TOA","MODEL":"A-1121","MACHINE_NUMBER":"11379308","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายอภิวัฒน์ วิทยารัฐ","PLACE":"ICT1404","OLD_PLACE":"ICT1402"},{"ID":103,"NUMBER_ASSET":"พย5965-002-001-057","NAME_ASSET":"ลำโพง 2 ทาง","VALUE_ASSET":1,"UNIT":"ชุด","COST_ASSET":"3,500.00","BRAND":"TOA","MODEL":"BS-1030B","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายอภิวัฒน์ วิทยารัฐ","PLACE":"ICT1404","OLD_PLACE":"ICT1402"},{"ID":104,"NUMBER_ASSET":"พย5965-002-001-058","NAME_ASSET":"ลำโพง 2 ทาง","VALUE_ASSET":1,"UNIT":"ชุด","COST_ASSET":"3,500.00","BRAND":"TOA","MODEL":"BS-1030B","MACHINE_NUMBER":"-","STATUS":"ใช้งาน","INSPECTION_RESULTS":null,"OWNER":"นายอภิวัฒน์ วิทยารัฐ","PLACE":"ICT1404","OLD_PLACE":"ICT1402"}
]
const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    margin:'0 0 0 0 '
};

const durable_articles = () => {
    const [visible, setVisible] = useState(false);
    const onOpenDraw = () => {
        setVisible(true)
    }

    const onClose  = () => {
        setVisible(false)
    }
    return (
        
        
        <div>
            
            <Drawer
                title="แก้ไขครุภัณฑ์"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                width="400px">
                
                <form>
                    <div >

                        <label style={{ marginLeft: '5px 0 0 50px' }}for="lname">หมายเลขครุภัณฑ์</label><br/>
                        <input type="text" id="num durable articles" name="numd" placeholder="xxx-xxx-xxx-xxx" required/><br/>

                        <label style={{ marginLeft: '5px 0 0 50px' }} for="lname">ชื่อครุภัณฑ์</label><br/>
                        <input type="text" id="name durable articles" name="named" placeholder="Product name.." required/><br/>

                        <label style={{ marginLeft: '5px 0 0 50px' }} for="lname">จำนวน (ชิ้น)</label><br/>
                        <input type="number" id="number of durable articles" name="numberd" placeholder="0" required/><br/>

                        <label style={{ marginLeft: '5px 0 0 50px' }} for="lname">ต้นทุนต่อหน่วย</label><br/>
                        <input type="text" id="price durable articles" name="priced" placeholder="ราคา" required/><br/>

                        <label style={{ marginLeft: '5px 0 0 50px' }} for="lname">ยี่ห้อ</label><br/>
                        <input type="text" id="band" name="bandd" placeholder="ยี่ห้อ" required/><br/>

                        <label style={{ marginLeft: '5px 0 0 50px' }} for="lname">โมเดล</label><br/>
                        <input type="text" id="model" name="modeld" placeholder="model" required/><br/>

                    </div>

                    <div>
                        <label style={{ marginLeft: '8px 0 0 50px' }} for="lname">หมายเลขเครื่อง</label><br/>
                            <input type="text" id="seral number" name="sn" placeholder="s/n" required/><br/>

                            <label style={{ marginLeft: '5px 0 0 50px' }} for="country">สถานะ</label><br/>
                            <select id="status" name="statusd">
                                <option value="australia">ใช้งาน</option>
                                <option value="canada">ไม่ใช้งาน</option>
                                <option value="usa">อยู่ระหว่างนำซ่อม</option>
                            </select><br/>

                            <label style={{ marginLeft: '5px 0 0 50px' }} for="country">ผลการตรวจสอบพัสดุ</label><br/>
                            <select id="test" name="testd">
                                <option value="usa">ตรวจพบ</option>
                                <option value="australia">ชำรุด</option>
                                <option value="canada">เสื่อมสภาพ</option>
                                <option value="usa">หมดความจำเป็น</option>
                                <option value="usa">ตรวจไม่พบ</option>
                            </select><br/>

                            <label style={{ marginLeft: '5px 0 0 50px' }} for="lname">ผู้รับผิดชอบ</label><br/>
                            <input type="text" id="dealer" name="dealerd" placeholder="..." required/><br/>

                            <label style={{ marginLeft: '5px 0 0 50px' }} for="country">สถานที่ใช้งาน</label><br/>
                            <select id="locat" name="locatd">
                                <option value="usa">none</option>
                                <option value="usa">ict1323</option>
                                <option value="australia">ict1340</option>
                                <option value="canada">ict1311</option>
                                <option value="usa">ict1203</option>
                                <option value="usa">ict1235</option>
                            </select><br/>

                            <label style={{ marginLeft: '5px 0 0 50px' }} for="country">สถานที่ใช้งานเดิม</label><br/>
                            <select id="olocat" name="olocatd">
                                <option value="usa">none</option>
                                <option value="usa">ict1323</option>
                                <option value="australia">ict1340</option>
                                <option value="canada">ict1311</option>
                                <option value="usa">ict1203</option>
                                <option value="usa">ict1235</option>
                            </select><br/>
                    </div>
                    <div>
                        <div style={{position: 'absolute',marginLeft:'470px 0 0 600px'}} >
                            <input type="submit" value="Submit" />
                            <input type="reset" value="reset"/>
                        </div>

                    </div>
                </form>



                

                
            </Drawer>

            <div>
            <header id="h1">
                {/* <img src="img/h1.png" alt="" /> */}
                <link rel="stylesheet" href="css/search.css" />
                
            </header>
            
            <div className="menubar">

                <div className="logo">
                    <h1>ระบบการจัดการตรวจสอบครุภัณฑ์และวัสดุคงทนถาวร</h1>
                </div>

                <div className="dropdown" style={{ float: 'left' }}>
                    <button className="dropbtn"><a href="/home" style={{ border: 'none', color: 'white' }}>หน้าหลัก</a></button>
                </div>


                <div className="dropdown" style={{ float: 'right' }}>
                    <form>
                        <button className="dropbtn">
                            <a href="/login.html">ออกจากระบบ</a>
                        </button>
                    </form>
                </div>

                <div className="dropdown" style={{ float: 'right' }}>
                    <button className="dropbtn"><a href="http://intra.up.ac.th/inv/eInventory/Inventory_Report.aspx?sType=place&place=ICT" style={{ color: 'white' }}>รายงาน</a></button>
                </div>

                <div className="dropdown" style={{ float: 'right' }}>
                    <button className="dropbtn">จัดการครุภัณฑ์</button>
                    <div className="dropdown-content" style={{ left: 0 }}>
                        <a href="/durable_articles">ค้นหาครุภัณฑ์</a>
                        <a href="/form1">เพิ่มครุภัณฑ์</a>
                        <a href="/addqr.html">สร้างคิวอาร์โค้ด</a>
                        {/* <a href="#">แก้ไขครุภัณฑ์</a> */}
                    </div>
                </div>
            </div>

            <header style={{ color: 'black', margin: '0 0 0 30px' }}>
                <h1 >รายการครุภัณฑ์ทั้งหมด</h1>
            </header>

           

            <section style={{ backgroundColor: 'linen', width: '100%' , textAlign:'center'}}>
                <table style={{  textAlign:'center'}}>
                    <tr style={{ height: '40px' }}>
                        <td id="td1" style={{ width: '40px' }}>
                            <a >
                                <img src="/img/search.png" alt="ไอคอน" style={{ width: '80%' }} className="icon" />
                            </a>
                        </td>
                        <td id="td1" style={{ width: '400px', height: '40px' }}>
                            <input type="search" name="s1" id="s1" placeholder="ค้นหาครุภัณฑ์" className="searchbar" style={{ height: '30px' }} />
                        </td>
                        <td>
                            <select id="search_by" name="search_by" style={{ height: '30px' }}>
                                <option value="australia">เลขครุภัณฑ์</option>
                                <option value="canada">ชื่อครุภัณฑ์</option>
                                <option value="usa">หมายเลขห้อง</option>
                            </select>
                        </td>
                        <td>
                            <input type="submit" value="ค้นหา"  />
                        </td>
                    </tr>
                </table>
                <table style={{ width: '100%' }}>

                    <tr style={{ backgroundColor: 'rgb(71, 81, 179)', textAlign: 'center',border: '1px solid black'}}>

                        <td >
                            ลำดับ
                        </td>
                        <td>
                            เลขครุภัณฑ์
                        </td>
                        <td>
                            ชื่อครุภัณฑ์:
                        </td>
                        <td>
                            จำนวน
                        </td>
                        <td>
                            หน่วย
                        </td>
                        <td>
                            ราคา
                        </td>
                        <td>
                            ยี่ห้อ
                        </td>
                        <td>
                            รุ่น
                        </td>
                        <td>
                            หมายเลขเครื่อง
                        </td>
                        <td>
                            สถานะ
                        </td>
                        <td>
                            การตรวจเช็ค
                        </td>
                        <td>
                            ผู้รับผิดชอบ
                        </td>
                        <td>
                            ที่อยู่
                        </td>
                        <td>
                            ที่อยู่เดิม
                        </td>
                        <td>
                            
                        </td>
                        {/* <td style={{ width: '85px' }}>
                            <a>
                                <img src="/img/check-box.png" alt="checkbox" style={{ width: '40%' }} className="icon" />
                            </a>
                        </td> */}
                    </tr>
                    {FakeData && FakeData.map(e => {
                        return (
                            <tr style={{ backgroundColor: 'rgb(247, 174, 148)', height: '20px', textAlign: 'center',border: '1px solid black' }}>
                                
                                
                                <td>
                                    {e.ID}
                                </td>
                                <td>
                                    {e.NUMBER_ASSET}
                                </td>
                                <td>
                                    {e.NAME_ASSET}
                                </td>
                                <td>
                                    {e.VALUE_ASSET}
                                </td>
                                <td>
                                    {e.UNIT}
                                </td>
                                <td>
                                    {e.COST_ASSET}
                                </td>
                                <td>
                                    {e.BRAND}
                                </td>
                                <td>
                                    {e.MODEL}
                                </td>
                                <td>
                                    {e.MACHINE_NUMBER}
                                </td>
                                <td>
                                    {e.STATUS}
                                </td>
                                <td>
                                    {e.INSPECTION_RESULTS}
                                </td>
                                <td>
                                    {e.OWNER}
                                </td>
                                <td>
                                    {e.PLACE}
                                </td>
                                <td>
                                    {e.OLD_PLACE}
                                </td>
                                <td style={{ width: '60px' }}>
                                    <a href="#" onClick={onOpenDraw} >แก้ไขครุภัณฑ์</a>
                                </td>
                            </tr>
                        )
                    })}
                </table>

                <div style={{ margin: '10px 0 0 500px' }}>
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </section>
            <Link id="Link" href="/fake_data">
                <button for="Link" className="font-mitr, button-register">
                    <a>Register</a>
                </button>
            </Link>
            
            </div>
            <footer />
            
        </div>
    )
}

export default durable_articles
