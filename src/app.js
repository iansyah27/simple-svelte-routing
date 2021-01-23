import Swal from 'sweetalert2';

export const baseUrl = 'http://localhost/belajar/main/public/api/';

export const notif = (message, type, toast = false) => {
    if (toast) {
        const Mixin = Swal.mixin({
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCloseButton: true
        });

        return Mixin.fire({
            title: message,
            icon: type
        });
    } else {
        return Swal.fire({
            title: type[0].toUpperCase() + type.slice(1),
            text: message,
            icon: type
        });
    }
}

export const params = (obj, prefix) => {
    var str = [],
      p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
        str.push((v !== null && typeof v === "object") ?
          serialize(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  }