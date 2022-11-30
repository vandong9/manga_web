import { Component } from '@angular/core';
import { IChannelModel } from 'src/models/channel';
import { ICommunityModel } from 'src/models/community';

@Component({
  selector: 'channel-community',
  templateUrl: 'channel-community.component.html',
})
export class ChannelCommunityComponent {
  communityModels: ICommunityModel[] = [
    {
      id: '123456',
      channel: {
        id: '123456',
        name: 'BleSsed Anime',
        avatar:
          'https://yt3.ggpht.com/ytc/AMLnZu8Nj1KW5Ws7bL1iuVMwt6SVAntdkLqgdTPb5bdK=s68-c-k-c0x00ffffff-no-rj',
        subcribers: '12k',
        subcriberscount: 123456,
      },
      uploadedDate: '5 days ago',
      scriptContent: `Hàng chục năm đứng dưới ánh đèn sân khấu nhưng cảm xúc luôn như lần đầu ❤️😊

      Link: https://youtu.be/sm3XlDdo5hQ
      
      `,
      fullContent: `Đón xem học trò Puka, Duy Khánh cùng Gil Lê cùng thầy giáo da dẻ @Lê Dương Bảo Lâm tìm ra đâu là FAN của họ thôi nào 🙌
      Show Digital đầu tiên tại Việt Nam cho fan gần gũi với Idol và tạo cái nhìn tich cực antifan với Idol.
      
      Cùng đón xem chương trình phát sóng lúc 20:00 Thứ 5 hằng tuần trên kênh YouTube @ĐÔNG TÂY PROMOTION OFFICIAL
      Nội dung được sản xuất, khai thác và bảo vệ bản quyền bởi VieNETWORK.
      
      #FindMyFan #DươngLâm #Findmyfanvn`,
      image:
        'https://yt3.ggpht.com/i1xWtV9BWCMWV7vUG9WIzQui3hpYUzoU-qlMjGLWft9Da1lEagCj3C7FQyT_7obTuWPic68nrcBANQ=s640-c-fcrop64=1,01cd0000fe32ffff-nd-v1',
    },
    {
      id: '1111222',
      channel: {
        id: '123456',
        name: 'BleSsed Anime',
        avatar:
          'https://yt3.ggpht.com/ytc/AMLnZu8Nj1KW5Ws7bL1iuVMwt6SVAntdkLqgdTPb5bdK=s68-c-k-c0x00ffffff-no-rj',
        subcribers: '12k',
        subcriberscount: 123456,
      },
      uploadedDate: '',
      scriptContent: `Chúc chị thực sự may mắn  Em Đen Da 
      Xem thêm 👉 https://youtu.be/CZR-NcS_Jl4`,
      fullContent: '',
      image:
        'https://yt3.ggpht.com/ROBmI9x4ezBM6hcPWVpb0Sv3rdY-p1hHDtmp60ooOqO_PdnupS3d7OuOy4gEy3RzruZahyzD6eMKNQ=s640-c-fcrop64=1,00000000ffffffff-nd-v1',
    },
    {
      id: '121245',
      channel: {
        id: '123456',
        name: 'BleSsed Anime',
        avatar:
          'https://yt3.ggpht.com/ytc/AMLnZu8Nj1KW5Ws7bL1iuVMwt6SVAntdkLqgdTPb5bdK=s68-c-k-c0x00ffffff-no-rj',
        subcribers: '12k',
        subcriberscount: 123456,
      },
      uploadedDate: '',
      scriptContent: `Họ sẽ hạnh phúc nhưng không phải là ở đây Em Đen Da 
      Xem thêm👉https://youtu.be/viSCvCyfzjQ`,
      fullContent: '',
      image:
        'https://yt3.ggpht.com/NMEtnguTFxEgQqjAyjQJRS8kJOOU7AYyIXNmkgAP_BUf8OBhnJzdBVn1LeACCW0Vx8T6UGVJp1z08g=s640-c-fcrop64=1,00000000ffffffff-nd-v1',
    },
  ];
}
