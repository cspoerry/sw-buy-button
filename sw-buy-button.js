document.addEventListener('DOMContentLoaded', function () {
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.shopify.com/shopifycloud/shopify-buy-button/v2/latest/shopify-buy.umd.min.js';
    script.onload = ShopifyBuyInit;
    document.head.appendChild(script);
  }

  function ShopifyBuyInit() {
    const client = ShopifyBuy.buildClient({
      domain: 'aaec3c-23.myshopify.com',
      storefrontAccessToken: 'e868913f20fcbe9d0222c0737b15d2ef',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '9705573876045',
        node: document.getElementById('product-component-1744023946049'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
        "product": {
          "styles": {
            "product": {
              "background-color": "#ffffff",
              "text-align": "center",
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0",
                "margin-bottom": "30px"
              }
            },
            "title": {
              "color": "#4c4c4c",
              "font-size": "24px",
              "margin-bottom": "15px"
            },
            "button": {
              "color": "#ffffff",
              "background-color": "#000000",
              ":hover": {
                "color": "#ffffff",
                "background-color": "#333333"
              },
              ":focus": {
                "background-color": "#333333"
              },
              "border-radius": "30px",
              "padding-left": "60px",
              "padding-right": "60px",
              "font-size": "16px",
              "margin-top": "15px",
              "transition": "background-color 0.3s ease"
            },
            "price": {
              "color": "#4c4c4c",
              "font-size": "18px",
              "margin": "10px 0"
            },
            "compareAt": {
              "color": "#4c4c4c",
              "font-size": "15px"
            },
            "unitPrice": {
              "color": "#4c4c4c",
              "font-size": "15px"
            }
          },
          "buttonDestination": "modal",
          "contents": {
            "options": false
          },
          "width": "100%",
          "text": {
            "button": "Voir le programme et les prix"
          },
          "events": {
            "addVariantToCart": function (product) {
              var originPage = window.location.href;
              product.cart.updateAttributes({
                '_origin': originPage
              });
            }
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "0"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true
          },
          "styles": {
            "product": {
              "background-color": "#ffffff",
              "text-align": "center",
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "color": "#ffffff",
              "background-color": "#000000",
              ":hover": {
                "color": "#ffffff",
                "background-color": "#333333"
              },
              ":focus": {
                "background-color": "#333333"
              },
              "border-radius": "30px",
              "padding-left": "60px",
              "padding-right": "60px",
              "font-size": "16px",
              "margin-top": "15px",
              "transition": "background-color 0.3s ease"
            },
            "title": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "bold",
              "font-size": "26px",
              "color": "#4c4c4c",
              "margin-bottom": "15px"
            },
            "price": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "18px",
              "color": "#4c4c4c",
              "margin": "10px 0"
            },
            "compareAt": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "15px",
              "color": "#4c4c4c"
            },
            "unitPrice": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "15px",
              "color": "#4c4c4c"
            }
          },
          "text": {
            "button": "Request personalized quote"
          }
        },
        "option": {},
        "cart": {
          "styles": {
            "button": {
              "color": "#ffffff",
              "background-color": "#000000",
              ":hover": {
                "color": "#ffffff",
                "background-color": "#333333"
              },
              ":focus": {
                "background-color": "#333333"
              },
              "border-radius": "30px",
              "font-size": "16px",
              "transition": "background-color 0.3s ease"
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Check availability and request quote"
          },
          "popup": false
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#000000",
              ":hover": {
                "background-color": "#333333"
              },
              ":focus": {
                "background-color": "#333333"
              },
              "transition": "background-color 0.3s ease"
            },
            "count": {
              "color": "#ffffff",
              ":hover": {
                "color": "#ffffff"
              }
            },
            "iconPath": {
              "fill": "#ffffff"
            }
          }
        }
      }
      });
    });
  }
});
