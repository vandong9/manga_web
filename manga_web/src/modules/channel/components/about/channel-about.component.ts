import { Component } from '@angular/core';

@Component({
  selector: 'channel-about',
  templateUrl: 'channel-about.component.html',
})
export class ChannelAboutComponent {
  description: String = `Welcome to the official Breaking Bad/Better Call Saul YouTube channel! 

  ABOUT BREAKING BAD: Emmy ® Award winner Bryan Cranston stars as Walter White, a chemistry teacher struggling to make ends meet for his wife and son. When  he is diagnosed with terminal lung cancer, he uses his training as a chemist to cook and sell crystal meth stopping at nothing to make sure his family is taken care of after he's gone, even if it means putting all their lives on the line.  Executive produced by Vince Gilligan and Mark Johnson.
  
  ABOUT BETTER CALL SAUL: Before Saul Goodman met Walter White, he was struggling attorney Jimmy McGill (Bob Odenkirk). In this prequelto the Emmy®-winning series Breaking Bad, Jimmy teams up with “fixer” Mike Ehrmantraut (Jonathan Banks) and begins his transformation from optimistic underdog into Albuquerque’s most notorious legal legend.
  Michael McKean stars as Jimmy’s brilliant, uncompromising brother, Chuck.`;
  aboutModel: IChannelAboutModel = {
    description: this.description,
    details: [{ title: 'Location', value: 'Vietnam' }],
    joinDate: 'Joined Nov 30, 2010',
    totalView: '19,253,277 views',
    links: [
      {
        title: 'ĐĂNG KÝ KÊNH',
        value:
          'https://www.youtube.com/channel/UCqFTi1Xzf115w-z1NID0g7g?sub_confirmation=1',
      },
      {
        title: 'Twitter',
        value:
          'https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbk50ZlF5MU1OdGNTMFUxSnF0TzRMNVJQTjM5Z3xBQ3Jtc0ttdXpsYWVTZk1TSTZJOS1SZm40X1JLcG9KUVVISnJ1SmtSUTBCcDRnZUVXRHVjbnB0dF8zU1ZVNzhjNzMyTXZ3Z0tfbXNFZTZWOC1HWkFsU2owZHExWWJXa19BNGZLdS1JSFNzdmZwSG9xWGREeUNEUQ&q=https%3A%2F%2Ftwitter.com%2Fdaniyalive',
      },
      {
        title: 'Tumblr',
        value:
          'https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbTlHTkhSMUI5Sm1yeUIwSTVxaFRFb25WNmI3d3xBQ3Jtc0trSXpJU3lIbzlRcnVLUE1jMlVGMlpuS2hDcFRBazBtSThPLTdCd3lfOXhJekNGRnJzV3RsRWJmLXlablBlZnVQZWlySUZpZDktNXBWUWEwdWZrNEtvYTZ4cmVocExnSWNDMjlWeHVOekVUaHkwZ2lURQ&q=http%3A%2F%2Fdaniyalive.tumblr.com%2F',
      },
    ],
  };
}

interface IChannelAboutModel {
  description: String;
  details: ITitleValue[];
  links: ITitleValue[];
  joinDate: string;
  totalView: string;
}

interface ITitleValue {
  title: string;
  value: String;
}

enum TitleValueType {
  description,
  link,
}
