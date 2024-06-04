function button_5() {
  var temp1 = sendSelectedValue();
  i = parseFloat(temp1);
  var temp99 = sendSelectedValueNumber_99();
  j = parseFloat(temp99);
  var tempNumber_3 = sendSelectedValueNumber_3();
  k = parseFloat(tempNumber_3);
  moxue = parseFloat(document.getElementById("number_88").value);
  var tempNumber_4 = sendSelectedValueNumber_4();
  l = parseFloat(tempNumber_4);
  var temNumber_5 = sendSelectedValueNumber_5();
  m = parseFloat(temNumber_5);
  n = parseFloat(0.1);
  p = parseFloat(document.getElementById("number_8").value);
  var temNumber_8 = sendSelectedValueNumber_OrderQty();
  orderQty = parseFloat(temNumber_8);
  q = parseFloat(document.getElementById("number_9").value);
  r = parseFloat(document.getElementById("number_10").value);
  var tempNumber_11 = sendSelectedValueNumber_11();
  s = parseFloat(tempNumber_11);
  t = parseFloat(document.getElementById("number_12").value);
  var control = sendSelectedValueNumber_77();
  var temp = (i * j * k) / 1000 + 15.625 * k * n / 1000 + l / (m * moxue * 20) + s + t * 1.25 + q / r + (637.5 / (orderQty / p * (j + 0.05)) + 750 / (orderQty / p * (j + 0.05)) + 0.625 + 0.125 * p + 0.4375) / p * (j + 0.05) * control;
  document.getElementById("sum").value = temp.toFixed(2);
}

function button_6() {
  il = parseFloat(document.getElementById("number_13").value);
  iw = parseFloat(document.getElementById("number_14").value);
  ih = parseFloat(document.getElementById("number_15").value);
  iq = parseFloat(document.getElementById("number_16").value);

  el = parseFloat(document.getElementById("number_17").value);
  ew = parseFloat(document.getElementById("number_18").value);
  eh = parseFloat(document.getElementById("number_19").value);
  eq = parseFloat(document.getElementById("number_20").value);


  // ip = parseFloat(document.getElementById("number_21").value);
  var temp98 = sendSelectedValueNumber_98();
  ip = parseFloat(temp98);
  // ep = parseFloat(document.getElementById("number_22").value);
  var temp97 = sendSelectedValueNumber_97();
  ep = parseFloat(temp97);

  bq = parseFloat(document.getElementById("number_23").value);
  // bp = parseFloat(document.getElementById("number_24").value);
  bp = 1.54;

  var temp = (il + iw + 5) * (iw + ih + 3) * 2 * 1.55 * ip / 10000 * (eq / iq) * 1.25 + (el + ew + 5) * (ew + eh + 3) * 2 * 1.55 * ep / 10000 * 1.25 + 1.25 + (il + 3) * (iw + 3) * 1.55 * bp * 1.25 / 10000 * bq;
  document.getElementById("sum2").value = temp.toFixed(2);
  var temp3 = sendSelectedValueNumber_OrderQty();
  var temp2 = el * ew * eh / 1000000 * (temp3 / eq + 1);
  document.getElementById("number_25").value = temp2.toFixed(2);
  var temp5 = parseFloat(document.getElementById("sum").value);
  var temp4 = ((temp2 * 70 + 500 + 350 + 100 + 200 + 300 + 300 + 500) / temp3 + temp5) / 6.8;
  document.getElementById("number_26").value = "$" + temp4.toFixed(2) + "美金/个";
  var temp6 = sendSelectedValueNumber_OrderQty();
  var temp7 = sendSelectedValueNumber_95(el, ew, eh, eq, temp3);
  var temp8 = parseFloat(temp7);
  var temp9 = sendSelectedValueNumber_94(el, ew, eh, eq, temp3);
  var temp10 = parseFloat(temp9);
  var temp11 = sendSelectedValueNumber_93();
  if (temp8 > temp10) {
    document.getElementById("number_28").value = temp8.toFixed(0) + "元" + temp11;
  } else {
    document.getElementById("number_28").value = temp10.toFixed(0) + "元" + temp11;
  }
}

// function sendSelectedValue() {
//   var selectBox = document.getElementById("selectedItem");
//   var selectedValue = selectBox.options[selectBox.selectedIndex].value;
//   var temNumber_8 = sendSelectedValueNumber_OrderQty();
//   var orderQty = parseFloat(temNumber_8);
//   var tempNumber_3 = sendSelectedValueNumber_3();
//   var k = parseFloat(tempNumber_3);
//   if(orderQty*tempNumber_3>380000 && selectedValue == 15.6){
//     selectedValue = 14.375;
//   }
//   return selectedValue;
// }

function sendSelectedValue() {
  var selectBox = document.getElementById("selectedItem");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue == 1) {
    selectedValue = 23.1;
  } else if (selectedValue == 2) {
    selectedValue = 23.1;
  } else if (selectedValue == 3) {
    selectedValue = 25.6;
  } else if (selectedValue == 4) {
    selectedValue = 28;
  }
  var temNumber_8 = sendSelectedValueNumber_OrderQty();
  var orderQty = parseFloat(temNumber_8);
  var tempNumber_3 = sendSelectedValueNumber_3();
  var k = parseFloat(tempNumber_3);
  if (orderQty * tempNumber_3 > 380000 && selectedValue == 25.6) {
    selectedValue = 24.375;
  }
  return selectedValue;
}

function sendSelectedValueNumber_4() {
  var selectBox = document.getElementById("number_4");
  var selectedValuenumber_4 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValuenumber_4 == 1) {
    selectedValuenumber_4 = 7062.5;
  } else if (selectedValuenumber_4 == 2) {
    selectedValuenumber_4 = 7437.5;
  }
  return selectedValuenumber_4;
}

function sendSelectedValueNumber_11() {
  var selectBox = document.getElementById("number_11");
  var selectedValuenumber_11 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValuenumber_11 == 1) {
    selectedValuenumber_11 = 0.125;
  } else if (selectedValuenumber_11 == 2) {
    selectedValuenumber_11 = 0.375;
  } else if (selectedValuenumber_11 == 3) {
    selectedValuenumber_11 = 0.625;
  } else if (selectedValuenumber_11 == 4) {
    selectedValuenumber_11 = 0.75;
  } else if (selectedValuenumber_11 == 5) {
    selectedValuenumber_11 = 0.875;
  } else if (selectedValuenumber_11 == 6) {
    selectedValuenumber_11 = 1;
  } else if (selectedValuenumber_11 == 7) {
    selectedValuenumber_11 = 0.75;
  } else if (selectedValuenumber_11 == 8) {
    selectedValuenumber_11 = 0.875;
  } else if (selectedValuenumber_11 == 9) {
    selectedValuenumber_11 = 1.6875;
  }
  return selectedValuenumber_11;
}

function sendSelectedValueNumber_99() {
  var selectBox = document.getElementById("Number_99");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValueNumber_99 == 1) {
    selectedValueNumber_99 = 1.13;
  } else if (selectedValueNumber_99 == 2) {
    selectedValueNumber_99 = 1.15;
  } else if (selectedValueNumber_99 == 3) {
    selectedValueNumber_99 = 1.20;
  } else if (selectedValueNumber_99 == 4) {
    selectedValueNumber_99 = 1.15;
  } else if (selectedValueNumber_99 == 5) {
    selectedValueNumber_99 = 1.20;
  } else if (selectedValueNumber_99 == 6) {
    selectedValueNumber_99 = 1.15;
  } else if (selectedValueNumber_99 == 7) {
    selectedValueNumber_99 = 1.20;
  } else if (selectedValueNumber_99 == 8) {
    selectedValueNumber_99 = 1.15;
  } else if (selectedValueNumber_99 == 9) {
    selectedValueNumber_99 = 1.20;
  } else if (selectedValueNumber_99 == 10) {
    selectedValueNumber_99 = 1.20;
  } else if (selectedValueNumber_99 == 11) {
    selectedValueNumber_99 = 1.30;
  } else if (selectedValueNumber_99 == 12) {
    selectedValueNumber_99 = 1.35;
  } else if (selectedValueNumber_99 == 13) {
    selectedValueNumber_99 = 1.55;
  } else ("程序出问题了 按F5刷新试试看！");
  return selectedValueNumber_99;
}

function sendSelectedValueNumber_3() {
  var selectBox = parseFloat(document.getElementById("number_3").value);
  if (selectBox < 50) {
    selectBox += 5;
  } else if (selectBox < 100) {
    selectBox += 10;
  } else if (selectBox < 300) {
    selectBox += 15;
  } else if (selectBox < 500) {
    selectBox += 25;
  } else if (selectBox < 600) {
    selectBox += 30
  } else if (selectBox < 1000) {
    selectBox += 50;
  } else if (selectBox < 1500) {
    selectBox += 70;
  } else {
    selectBox += 100;
  }
  return selectBox;
}

function sendSelectedValueNumber_5() {
  var selectBox_99 = document.getElementById("Number_99");
  var selectedValueNumber_99 = selectBox_99.options[selectBox_99.selectedIndex].value;
  var selectedValueNumber_3 = parseFloat(document.getElementById("number_3").value);
  var selectedValueNumber_5 = 0;
  if (selectedValueNumber_99 == 1) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 30;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 25;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 18;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 15;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 10;
    } else {
      selectedValueNumber_5 = 6;
    }
  } else if (selectedValueNumber_99 == 2) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 20;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 17;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 13;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 8;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 3) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 15;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 13;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 11;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 9;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 7;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 4) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 20;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 17;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 13;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 8;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 5) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 9;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 8;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 8;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 6;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 6) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 20;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 17;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 13;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 8;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 7) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 9;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 8;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 8;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 6;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 8) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 20;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 17;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 13;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 8;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 9) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 9;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 8;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 8;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 6;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 10) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 15;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 14;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 11;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 8;
    } else {
      selectedValueNumber_5 = 5;
    }
  } else if (selectedValueNumber_99 == 11) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 9;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 8;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 7;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 7;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 5;
    } else {
      selectedValueNumber_5 = 3;
    }
  } else if (selectedValueNumber_99 == 12) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 12;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 10;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 9;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 7;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 6;
    } else {
      selectedValueNumber_5 = 3;
    }
  } else if (selectedValueNumber_99 == 13) {
    if (selectedValueNumber_3 <= 400) {
      selectedValueNumber_5 = 7;
    } else if (selectedValueNumber_3 <= 600) {
      selectedValueNumber_5 = 7;
    } else if (selectedValueNumber_3 <= 1000) {
      selectedValueNumber_5 = 6;
    } else if (selectedValueNumber_3 <= 1500) {
      selectedValueNumber_5 = 5;
    } else if (selectedValueNumber_3 <= 2000) {
      selectedValueNumber_5 = 5;
    } else {
      selectedValueNumber_5 = 3;
    }
  } else ("程序出问题了 按F5刷新试试看！");
  return selectedValueNumber_5;
}

function sendSelectedValueNumber_OrderQty() {
  var selectBox = document.getElementById("Number_OrderQty");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  return selectedValue;
}

function sendSelectedValueNumber_8() {
  var selectBoxNumber_8 = parseFloat(document.getElementById("number_8").value);
  return selectBoxNumber_8;
}

function sendSelectedValueNumber_77() {
  var selectBox = document.getElementById("Number_99");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValueNumber_99 == 1 || selectedValueNumber_99 == 2 || selectedValueNumber_99 == 3) {
    selectedValueNumber_99 = 0;
  } else {
    selectedValueNumber_99 = 1;
  };
  return selectedValueNumber_99;
}


function button_productSearch() {
  var arr1 = ["a11", "a12", "13", "14"];
  var arr2 = ["11.2*8*1.3", "12*12*1.5", "21.1*14.4*2", "27*13.5*1.5"];
  var arr3 = [30, 38, 100, 110];
  var len1 = arr1.length;
  var len2 = arr2.length;
  var len3 = arr3.length;
  // console.log(len1+" "+len2+" "+len3);
  // var temProductNumber1 = parseFloat(document.getElementById("number_productSearch").value);
  var temProductNumber1 = document.getElementById("number_productSearch").value;
  // alert(temProductNumber1);

  for (var temp = 0; temp < len1; temp++) {
    if (arr1[temp] == temProductNumber1) {
      temProductNumber1 = temp;
    }
  }

  // document.getElementById("productResult").value = temProductNumber1;
  // document.getElementById("productResult").value = temProductNumber1;
  // document.getElementById("productResult").value = (arr1[temProductNumber1]+" "+arr2[temProductNumber1]+" "+arr3[temProductNumber1]);
  document.getElementById("productResult").value = (arr1[temProductNumber1] + " " + arr2[temProductNumber1] + "mm " + arr3[temProductNumber1] + "g " + arr3[temProductNumber1] + "g " + arr3[temProductNumber1] + "g " + arr3[temProductNumber1] + "g ");
}

function sendSelectedValueNumber_98() {
  var selectBox = document.getElementById("Number_98");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValueNumber_99 == 1) {
    selectedValueNumber_99 = 1.54;
  } else if (selectedValueNumber_99 == 2) {
    selectedValueNumber_99 = 2.09;
  } else if (selectedValueNumber_99 == 3) {
    selectedValueNumber_99 = 2.18;
  } else if (selectedValueNumber_99 == 4) {
    selectedValueNumber_99 = 2.26;
  } else if (selectedValueNumber_99 == 5) {
    selectedValueNumber_99 = 2.34;
  } else if (selectedValueNumber_99 == 6) {
    selectedValueNumber_99 = 2.35;
  } else if (selectedValueNumber_99 == 7) {
    selectedValueNumber_99 = 2.43;
  } else if (selectedValueNumber_99 == 8) {
    selectedValueNumber_99 = 2.47;
  } else if (selectedValueNumber_99 == 9) {
    selectedValueNumber_99 = 2.52;
  } else if (selectedValueNumber_99 == 10) {
    selectedValueNumber_99 = 2.63;
  } else if (selectedValueNumber_99 == 11) {
    selectedValueNumber_99 = 2.7;
  } else ("程序出问题了 按F5刷新试试看！");
  return selectedValueNumber_99;
}

function sendSelectedValueNumber_97() {
  var selectBox = document.getElementById("Number_97");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValueNumber_99 == 1) {
    selectedValueNumber_99 = 1.54;
  } else if (selectedValueNumber_99 == 2) {
    selectedValueNumber_99 = 2.09;
  } else if (selectedValueNumber_99 == 3) {
    selectedValueNumber_99 = 2.18;
  } else if (selectedValueNumber_99 == 4) {
    selectedValueNumber_99 = 2.26;
  } else if (selectedValueNumber_99 == 5) {
    selectedValueNumber_99 = 2.34;
  } else if (selectedValueNumber_99 == 6) {
    selectedValueNumber_99 = 2.35;
  } else if (selectedValueNumber_99 == 7) {
    selectedValueNumber_99 = 2.43;
  } else if (selectedValueNumber_99 == 8) {
    selectedValueNumber_99 = 2.47;
  } else if (selectedValueNumber_99 == 9) {
    selectedValueNumber_99 = 2.52;
  } else if (selectedValueNumber_99 == 10) {
    selectedValueNumber_99 = 2.63;
  } else if (selectedValueNumber_99 == 11) {
    selectedValueNumber_99 = 2.7;
  } else ("程序出问题了 按F5刷新试试看！");
  return selectedValueNumber_99;
}

function sendSelectedValueNumber_96() {
  var selectBox = document.getElementById("Number_97");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValueNumber_99 == 1) {
    selectedValueNumber_99 = 1.54;
  } else if (selectedValueNumber_99 == 2) {
    selectedValueNumber_99 = 2.09;
  } else if (selectedValueNumber_99 == 3) {
    selectedValueNumber_99 = 2.18;
  } else if (selectedValueNumber_99 == 4) {
    selectedValueNumber_99 = 2.26;
  } else if (selectedValueNumber_99 == 5) {
    selectedValueNumber_99 = 2.34;
  } else if (selectedValueNumber_99 == 6) {
    selectedValueNumber_99 = 2.35;
  } else if (selectedValueNumber_99 == 7) {
    selectedValueNumber_99 = 2.43;
  } else if (selectedValueNumber_99 == 8) {
    selectedValueNumber_99 = 2.47;
  } else if (selectedValueNumber_99 == 9) {
    selectedValueNumber_99 = 2.52;
  } else if (selectedValueNumber_99 == 10) {
    selectedValueNumber_99 = 2.63;
  } else if (selectedValueNumber_99 == 11) {
    selectedValueNumber_99 = 2.7;
  } else ("程序出问题了 按F5刷新试试看！");
  return selectedValueNumber_99;
}

function sendSelectedValueNumber_98() {
  var selectBox = document.getElementById("Number_98");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValueNumber_99 == 1) {
    selectedValueNumber_99 = 1.54;
  } else if (selectedValueNumber_99 == 2) {
    selectedValueNumber_99 = 2.09;
  } else if (selectedValueNumber_99 == 3) {
    selectedValueNumber_99 = 2.18;
  } else if (selectedValueNumber_99 == 4) {
    selectedValueNumber_99 = 2.26;
  } else if (selectedValueNumber_99 == 5) {
    selectedValueNumber_99 = 2.34;
  } else if (selectedValueNumber_99 == 6) {
    selectedValueNumber_99 = 2.35;
  } else if (selectedValueNumber_99 == 7) {
    selectedValueNumber_99 = 2.43;
  } else if (selectedValueNumber_99 == 8) {
    selectedValueNumber_99 = 2.47;
  } else if (selectedValueNumber_99 == 9) {
    selectedValueNumber_99 = 2.52;
  } else if (selectedValueNumber_99 == 10) {
    selectedValueNumber_99 = 2.63;
  } else if (selectedValueNumber_99 == 11) {
    selectedValueNumber_99 = 2.7;
  } else ("程序出问题了 按F5刷新试试看！");
  return selectedValueNumber_99;
}

function sendSelectedValueNumber_95(el, ew, eh, eq, temp3) {
  var el = el;
  var ew = ew;
  var eh = eh;
  var eq = eq;
  var temp3 = temp3;
  var productWeight = parseFloat(document.getElementById("number_3").value);
  var realtotalweight = (productWeight * eq / 1000 + 1.6) * (temp3 / eq + 1);
  var selectBox = document.getElementById("number_27");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  var temp4 = 0;
  if (selectedValueNumber_99 == 1) {
    if (realtotalweight < 300) {
      temp4 = 0.7;
    } else if (realtotalweight < 500) {
      temp4 = 0.6;
    } else if (realtotalweight < 1000) {
      temp4 = 0.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.5;
    }
  } else if (selectedValueNumber_99 == 2) {
    if (realtotalweight < 300) {
      temp4 = 0.8;
    } else if (realtotalweight < 500) {
      temp4 = 0.7;
    } else if (realtotalweight < 1000) {
      temp4 = 0.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.6;
    }
  } else if (selectedValueNumber_99 == 3 || selectedValueNumber_99 == 4 || selectedValueNumber_99 == 5 || selectedValueNumber_99 == 6) {
    if (realtotalweight < 300) {
      temp4 = 1.4;
    } else if (realtotalweight < 500) {
      temp4 = 1.2;
    } else if (realtotalweight < 1000) {
      temp4 = 1;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.9;
    }
  } else if (selectedValueNumber_99 == 7 || selectedValueNumber_99 == 8 || selectedValueNumber_99 == 9 || selectedValueNumber_99 == 10 || selectedValueNumber_99 == 11) {
    if (realtotalweight < 300) {
      temp4 = 1.2;
    } else if (realtotalweight < 500) {
      temp4 = 1;
    } else if (realtotalweight < 1000) {
      temp4 = 0.9;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.7;
    }
  } else if (selectedValueNumber_99 == 12) {
    if (realtotalweight < 300) {
      temp4 = 1.8;
    } else if (realtotalweight < 500) {
      temp4 = 1.6;
    } else if (realtotalweight < 1000) {
      temp4 = 1.3;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.1;
    }
  } else if (selectedValueNumber_99 == 13) {
    if (realtotalweight < 300) {
      temp4 = 1.4;
    } else if (realtotalweight < 500) {
      temp4 = 1.2;
    } else if (realtotalweight < 1000) {
      temp4 = 1.1;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.9;
    }
  } else if (selectedValueNumber_99 == 14 || selectedValueNumber_99 == 15 || selectedValueNumber_99 == 16 || selectedValueNumber_99 == 17 || selectedValueNumber_99 == 18) {
    if (realtotalweight < 300) {
      temp4 = 1.7;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1;
    }
  } else if (selectedValueNumber_99 == 19 || selectedValueNumber_99 == 20) {
    if (realtotalweight < 300) {
      temp4 = 1.8;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1;
    }
  } else if (selectedValueNumber_99 == 21 || selectedValueNumber_99 == 22) {
    if (realtotalweight < 300) {
      temp4 = 1.7;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1;
    }
  } else if (selectedValueNumber_99 == 23 || selectedValueNumber_99 == 24 || selectedValueNumber_99 == 25) {
    if (realtotalweight < 300) {
      temp4 = 2.1;
    } else if (realtotalweight < 500) {
      temp4 = 1.8;
    } else if (realtotalweight < 1000) {
      temp4 = 1.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.3;
    }
  } else if (selectedValueNumber_99 == 26) {
    if (realtotalweight < 300) {
      temp4 = 1.7;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.3;
    }
  } else if (selectedValueNumber_99 == 27) {
    if (realtotalweight < 300) {
      temp4 = 2.1;
    } else if (realtotalweight < 500) {
      temp4 = 1.9;
    } else if (realtotalweight < 1000) {
      temp4 = 1.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.4;
    }
  } else if (selectedValueNumber_99 == 28) {
    if (realtotalweight < 300) {
      temp4 = 4.5;
    } else if (realtotalweight < 500) {
      temp4 = 4;
    } else if (realtotalweight < 1000) {
      temp4 = 3.5;
    } else if (realtotalweight >= 1000) {
      temp4 = 3;
    }
  } else if (selectedValueNumber_99 == 29) {
    if (realtotalweight < 300) {
      temp4 = 7;
    } else if (realtotalweight < 500) {
      temp4 = 6.5;
    } else if (realtotalweight < 1000) {
      temp4 = 6;
    } else if (realtotalweight >= 1000) {
      temp4 = 5;
    }
  } else if (selectedValueNumber_99 == 30) {
    if (realtotalweight < 300) {
      temp4 = 4;
    } else if (realtotalweight < 500) {
      temp4 = 4.5;
    } else if (realtotalweight < 1000) {
      temp4 = 4;
    } else if (realtotalweight >= 1000) {
      temp4 = 3.5;
    }
  } else if (selectedValueNumber_99 == 31) {
    if (realtotalweight < 300) {
      temp4 = 2.4;
    } else if (realtotalweight < 500) {
      temp4 = 2.1;
    } else if (realtotalweight < 1000) {
      temp4 = 1.8;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.6;
    }
  } else ("程序出问题了 按F5刷新试试看！");
  var temp99 = temp4 * realtotalweight * 1.1;
  return temp99;
}

function sendSelectedValueNumber_94(el, ew, eh, eq, temp3) {
  var el = el;
  var ew = ew;
  var eh = eh;
  var eq = eq;
  var temp3 = temp3;
  var productWeight = el * ew * eh / 5000;
  var realtotalweight = productWeight * (temp3 / eq + 1);
  var selectBox = document.getElementById("number_27");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  var temp4 = 0;
  if (selectedValueNumber_99 == 1) {
    if (realtotalweight < 300) {
      temp4 = 0.7;
    } else if (realtotalweight < 500) {
      temp4 = 0.6;
    } else if (realtotalweight < 1000) {
      temp4 = 0.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.5;
    }
  } else if (selectedValueNumber_99 == 2) {
    if (realtotalweight < 300) {
      temp4 = 0.8;
    } else if (realtotalweight < 500) {
      temp4 = 0.7;
    } else if (realtotalweight < 1000) {
      temp4 = 0.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.6;
    }
  } else if (selectedValueNumber_99 == 3 || selectedValueNumber_99 == 4 || selectedValueNumber_99 == 5 || selectedValueNumber_99 == 6) {
    if (realtotalweight < 300) {
      temp4 = 1.4;
    } else if (realtotalweight < 500) {
      temp4 = 1.2;
    } else if (realtotalweight < 1000) {
      temp4 = 1;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.9;
    }
  } else if (selectedValueNumber_99 == 7 || selectedValueNumber_99 == 8 || selectedValueNumber_99 == 9 || selectedValueNumber_99 == 10 || selectedValueNumber_99 == 11) {
    if (realtotalweight < 300) {
      temp4 = 1.2;
    } else if (realtotalweight < 500) {
      temp4 = 1;
    } else if (realtotalweight < 1000) {
      temp4 = 0.9;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.7;
    }
  } else if (selectedValueNumber_99 == 12) {
    if (realtotalweight < 300) {
      temp4 = 1.8;
    } else if (realtotalweight < 500) {
      temp4 = 1.6;
    } else if (realtotalweight < 1000) {
      temp4 = 1.3;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.1;
    }
  } else if (selectedValueNumber_99 == 13) {
    if (realtotalweight < 300) {
      temp4 = 1.4;
    } else if (realtotalweight < 500) {
      temp4 = 1.2;
    } else if (realtotalweight < 1000) {
      temp4 = 1.1;
    } else if (realtotalweight >= 1000) {
      temp4 = 0.9;
    }
  } else if (selectedValueNumber_99 == 14 || selectedValueNumber_99 == 15 || selectedValueNumber_99 == 16 || selectedValueNumber_99 == 17 || selectedValueNumber_99 == 18) {
    if (realtotalweight < 300) {
      temp4 = 1.7;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1;
    }
  } else if (selectedValueNumber_99 == 19 || selectedValueNumber_99 == 20) {
    if (realtotalweight < 300) {
      temp4 = 1.8;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1;
    }
  } else if (selectedValueNumber_99 == 21 || selectedValueNumber_99 == 22) {
    if (realtotalweight < 300) {
      temp4 = 1.7;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1;
    }
  } else if (selectedValueNumber_99 == 23 || selectedValueNumber_99 == 24 || selectedValueNumber_99 == 25) {
    if (realtotalweight < 300) {
      temp4 = 2.1;
    } else if (realtotalweight < 500) {
      temp4 = 1.8;
    } else if (realtotalweight < 1000) {
      temp4 = 1.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.3;
    }
  } else if (selectedValueNumber_99 == 26) {
    if (realtotalweight < 300) {
      temp4 = 1.7;
    } else if (realtotalweight < 500) {
      temp4 = 1.4;
    } else if (realtotalweight < 1000) {
      temp4 = 1.2;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.3;
    }
  } else if (selectedValueNumber_99 == 27) {
    if (realtotalweight < 300) {
      temp4 = 2.1;
    } else if (realtotalweight < 500) {
      temp4 = 1.9;
    } else if (realtotalweight < 1000) {
      temp4 = 1.6;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.4;
    }
  } else if (selectedValueNumber_99 == 28) {
    if (realtotalweight < 300) {
      temp4 = 4.5;
    } else if (realtotalweight < 500) {
      temp4 = 4;
    } else if (realtotalweight < 1000) {
      temp4 = 3.5;
    } else if (realtotalweight >= 1000) {
      temp4 = 3;
    }
  } else if (selectedValueNumber_99 == 29) {
    if (realtotalweight < 300) {
      temp4 = 7;
    } else if (realtotalweight < 500) {
      temp4 = 6.5;
    } else if (realtotalweight < 1000) {
      temp4 = 6;
    } else if (realtotalweight >= 1000) {
      temp4 = 5;
    }
  } else if (selectedValueNumber_99 == 30) {
    if (realtotalweight < 300) {
      temp4 = 4;
    } else if (realtotalweight < 500) {
      temp4 = 4.5;
    } else if (realtotalweight < 1000) {
      temp4 = 4;
    } else if (realtotalweight >= 1000) {
      temp4 = 3.5;
    }
  } else if (selectedValueNumber_99 == 31) {
    if (realtotalweight < 300) {
      temp4 = 2.4;
    } else if (realtotalweight < 500) {
      temp4 = 2.1;
    } else if (realtotalweight < 1000) {
      temp4 = 1.8;
    } else if (realtotalweight >= 1000) {
      temp4 = 1.6;
    }
  } else ("程序出问题了 按F5刷新试试看！");
  var temp99 = temp4 * realtotalweight * 1.1;
  return temp99;
}

function sendSelectedValueNumber_93() {
  var selectBox = document.getElementById("number_27");
  var selectedValueNumber_99 = selectBox.options[selectBox.selectedIndex].value;
  var temp4 = 0;
  if (selectedValueNumber_99 == 1) {
    temp4 = " 1天";
  } else if (selectedValueNumber_99 == 2) {
    temp4 = " 1-2天";
  } else if (selectedValueNumber_99 == 3 || selectedValueNumber_99 == 4 || selectedValueNumber_99 == 5 || selectedValueNumber_99 == 6) {
    temp4 = " 2-3天";
  } else if (selectedValueNumber_99 == 7 || selectedValueNumber_99 == 8 || selectedValueNumber_99 == 9 || selectedValueNumber_99 == 10 || selectedValueNumber_99 == 11) {
    temp4 = " 2-3天";
  } else if (selectedValueNumber_99 == 12) {
    temp4 = " 2-3天";
  } else if (selectedValueNumber_99 == 13) {
    temp4 = " 3-4天";
  } else if (selectedValueNumber_99 == 14 || selectedValueNumber_99 == 15 || selectedValueNumber_99 == 16 || selectedValueNumber_99 == 17 || selectedValueNumber_99 == 18) {
    temp4 = " 3-4天";
  } else if (selectedValueNumber_99 == 19 || selectedValueNumber_99 == 20) {
    temp4 = " 3-4天";
  } else if (selectedValueNumber_99 == 21 || selectedValueNumber_99 == 22) {
    temp4 = " 3-4天";
  } else if (selectedValueNumber_99 == 23 || selectedValueNumber_99 == 24 || selectedValueNumber_99 == 25) {
    temp4 = " 4-6天";
  } else if (selectedValueNumber_99 == 26) {
    temp4 = " 4-5天";
  } else if (selectedValueNumber_99 == 27) {
    temp4 = " 4-5天";
  } else if (selectedValueNumber_99 == 28) {
    temp4 = " 5-7天";
  } else if (selectedValueNumber_99 == 29) {
    temp4 = " 5-7天";
  } else if (selectedValueNumber_99 == 30) {
    temp4 = " 5-7天";
  } else if (selectedValueNumber_99 == 31) {
    temp4 = " 5-7天";
  } else ("程序出问题了 按F5刷新试试看！");
  return temp4;
}