// Prof. Dr. Gözde ÖZKAN TÜKEL - 5. Hafta (Bölüm 1 & 2) ve 6. Hafta PDF'lerindeki TÜM Örnekler ve Alıştırmalar
const R = String.raw;

window.PDF_SUMMARIES = [
  {
    id: "pdf1",
    badge: "5. Hafta · Bölüm 1 (30 Slayt)",
    title: "Homojen Hale Dönüştürülebilen Diferansiyel Denklemler",
    whatCameOut: [
      "Normalde y' = (x-y)/(x+y) homojendir ama y' = (x-y+4)/(x+y-2) denklemindeki +4 ve -2 sabit terimleri homojenliği bozar.",
      "Standart kalıp: dy/dx = F((a₁x + b₁y + c₁) / (a₂x + b₂y + c₂)).",
      "Durum 1 (Doğrular Kesişir: a₁/a₂ ≠ b₁/b₂): İki doğruyu 0'a eşitleyip kesim noktası (h,k) bulunur. x = X + h, y = Y + k ötelemesi yapılır. Sabitler yok olur, denklem homojenleşir. Sonra Y = UX dönüşümüyle çözülür ve en sonda X = x - h, Y = y - k geri yazılır.",
      "Durum 2 (Doğrular Paralel: a₁/a₂ = b₁/b₂): Kesim noktası yoktur! Ortak katlı ifadeye z = a₁x + b₁y denir, denklem doğrudan değişkenlerine ayrılabilir hale gelir."
    ],
    formulaBox: R`\text{Kesişiyorsa } \left(\frac{a_1}{a_2}\neq\frac{b_1}{b_2}\right): x=X+h,\; y=Y+k \xrightarrow{\text{Homojen}} Y=UX \quad\Big|\quad \text{Paralelse } \left(\frac{a_1}{a_2}=\frac{b_1}{b_2}\right): z=a_1x+b_1y`
  },
  {
    id: "pdf2",
    badge: "5. Hafta · Bölüm 2 (128 Slayt)",
    title: "Tam Diferansiyel Denklemler ve İntegral Çarpanı (μ)",
    whatCameOut: [
      "M(x,y)dx + N(x,y)dy = 0 biçimindeki denklemde çapraz kısmi türevler kontrol edilir: ∂M/∂y = ∂N/∂x (kısaca M_y = N_x).",
      "Eğer M_y = N_x ise denklem TAM DİFERANSİYELDİR: F(x,y) = ∫ M(x,y)dx + φ(y) yazılır, y'ye göre türev alınıp N(x,y)'ye eşitlenerek φ'(y) ve φ(y) bulunur. Genel çözüm F(x,y) = c'dir (Unutma: F(x,y) tek başına çözüm değildir, = c yazmak şarttır!).",
      "Eğer M_y ≠ N_x ise denklem tam değildir; denklemi tam yapan μ(x,y) İNTEGRAL ÇARPANI aranır. Slaytta 5 durum verilmiştir:",
      "1) (M_y - N_x) / N = f(x) yalnız x'e bağlıysa → μ(x) = e^{∫ f(x)dx}",
      "2) -(M_y - N_x) / M = (N_x - M_y) / M = g(y) yalnız y'ye bağlıysa → μ(y) = e^{∫ g(y)dy}",
      "3) Denklem y·f(xy)dx + x·g(xy)dy = 0 biçimindeyse → μ = 1 / (xM - yN)",
      "4) Denklem homojen ise → μ = 1 / (xM + yN)",
      "5) Denklem f₁(x)g₁(y)dx + f₂(x)g₂(y)dy = 0 gibi çarpanlarına ayrılıyorsa → μ = 1 / (f₂(x)g₁(y))"
    ],
    formulaBox: R`M_y = N_x \implies F = \int M\,dx + \phi(y) = c \quad\Big|\quad M_y \neq N_x \implies \mu(x)=e^{\int \frac{M_y-N_x}{N}dx},\;\; \mu(y)=e^{\int \frac{N_x-M_y}{M}dy}`
  },
  {
    id: "pdf3",
    badge: "6. Hafta (182 Slayt)",
    title: "Lineer, Bernoulli ve Riccati Diferansiyel Denklemleri",
    whatCameOut: [
      "6.1 Lineer Denklem: dy/dx + P(x)y = Q(x). İlk adım her zaman y' katsayısını 1 yapmaktır! İntegral çarpanı μ(x) = e^{∫ P(x)dx} ve genel çözüm: μ·y = ∫ μ·Q(x)dx + c (veya y = e^{-∫Pdx}[∫ Q·e^{∫Pdx}dx + c]). y'ye göre lineer değilse ters çevrilip dx/dy + P(y)x = Q(y) (x'e göre lineer) kontrol edilir!",
      "6.4 Bernoulli Denklemi: dy/dx + P(x)y = Q(x)y^n. Sağdaki y^n yüzünden lineer değildir. Her taraf y^n'e bölünür ve z = y^{1-n} dönüşümü yapılır: dz/dx + (1-n)P(x)z = (1-n)Q(x) lineer denklemine dönüşür.",
      "6.7 Riccati Denklemi: dy/dx + P(x)y + R(x) = Q(x)y^2. İçinde hem y², hem y, hem de y'siz R(x) terimi vardır. Soruda 'bir özel çözümü y₁ = ...' verilirse %100 Riccati'dir!",
      "Riccati 1 Özel Çözüm (y₁) Biliniyorsa İki Yöntem: (Teorem 1) y = y₁ + z dönüşümü Bernoulli'ye indirger; (Teorem 2) y = y₁ + 1/z dönüşümü doğrudan Lineer denkleme indirger!",
      "Riccati 2 Özel Çözüm (y₁, y₂) Biliniyorsa: (y - y₁)/(y - y₂) = c · e^{∫ (y₁ - y₂)Q(x)dx}.",
      "Riccati 3 Özel Çözüm (y₁, y₂, y₃) Biliniyorsa (İntegralsiz!): [(y - y₁)/(y - y₂)] · [(y₃ - y₂)/(y₃ - y₁)] = c."
    ],
    formulaBox: R`\text{Lineer: } \mu y = \int \mu Q\,dx + c \;\Big|\; \text{Bernoulli: } z=y^{1-n} \;\Big|\; \text{Riccati (Özel Çözüm } y_1\text{): } y = y_1 + \frac{1}{z} \text{ veya } y = y_1 + z`
  }
];

window.PDF_QUESTIONS = [
  // ==================== PDF 1: HOMOJEN HALE DÖNÜŞTÜRÜLEBİLENLER ====================
  {
    id: "p1-o1",
    pdf: "pdf1",
    topic: "Homojene Dönüştürülebilen (Kesişen Doğrular)",
    badge: "5. Hafta Böl.1 · Örnek 1",
    q: R`\((x + 2y + 7)y' + 2x - y + 4 = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`Denklemi \(y'\) yalnız kalacak şekilde yazarsak pay ve paydada \(+4\) ve \(+7\) sabitleri olan doğrular çıkar: \(y' = \frac{-2x + y - 4}{x + 2y + 7}\). Katsayılar oranı \(\frac{-2}{1} \neq \frac{1}{2}\) olduğu için <b>doğrular kesişir</b>.`,
    formulaUsed: R`x = X + h,\quad y = Y + k \quad\longrightarrow\quad Y = UX \;\;(dY = U\,dX + X\,dU)`,
    steps: [
      ["Standart kesirli biçime getir ve kesişimi kontrol et", R`\[\frac{dy}{dx} = \frac{-2x + y - 4}{x + 2y + 7}\]Katsayılar: \(a_1=-2, b_1=1\) ve \(a_2=1, b_2=2\). Oranlar \(\frac{-2}{1} \neq \frac{1}{2}\) olduğundan kesim noktası \((h,k)\) vardır.`],
      ["(h, k) kesim noktasını bul", R`Sabitleri sıfırlamak için doğruları sıfıra eşitle:\[\begin{cases}-2h + k - 4 = 0 \\ h + 2k + 7 = 0\end{cases} \implies k = 2h + 4 \implies h + 2(2h+4) = -7 \implies 5h = -15 \implies h = -3,\; k = -2\]`],
      ["Öteleme dönüşümünü uygula (Sabitler yok olur)", R`\(x = X - 3,\; y = Y - 2 \implies dx = dX,\; dy = dY\) yazılır:\[\frac{dY}{dX} = \frac{-2X + Y}{X + 2Y} = \frac{-2 + \frac{Y}{X}}{1 + 2\frac{Y}{X}}\]`],
      ["Homojen denklemi Y = UX ile çöz", R`\(Y = UX \implies dY = U\,dX + X\,dU\) yazılır:\[U + X\frac{dU}{dX} = \frac{-2+U}{1+2U} \implies X\frac{dU}{dX} = \frac{-2+U - U - 2U^2}{1+2U} = \frac{-2(U^2+1)}{1+2U}\]Değişkenlerine ayır:\[\frac{dX}{X} + \frac{1+2U}{2(U^2+1)}dU = 0 \implies \frac{dX}{X} + \frac{1}{2}\frac{dU}{U^2+1} + \frac{2U\,dU}{2(U^2+1)} = 0\]`],
      ["İntegral al ve X = x + 3, Y = y + 2 geri yaz", R`İntegral alınıp \(2\) ile çarpılırsa:\[2\ln|X| + \arctan U + \ln(U^2+1) = \ln c \implies \ln\big(X^2(U^2+1)\big) = \ln c - \arctan U\]\(U = \frac{Y}{X}\) olduğundan \(X^2(U^2+1) = X^2 + Y^2\):\[X^2 + Y^2 = c\,e^{-\arctan(Y/X)} \implies (x+3)^2 + (y+2)^2 = c\,e^{-\arctan\left(\frac{y+2}{x+3}\right)}\]`]
    ],
    trap: R`En sonda \(X\) yerine \(x - h = x - (-3) = x + 3\) ve \(Y\) yerine \(y - k = y + 2\) yazmayı unutursan şıklarda bulamazsın!`
  },
  {
    id: "p1-o2",
    pdf: "pdf1",
    topic: "Homojene Dönüştürülebilen (Paralel Doğrular)",
    badge: "5. Hafta Böl.1 · Örnek 2",
    q: R`\((x + y + 1)\,dx + (2x + 2y - 1)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`Parantez içindeki doğrulara bak: birincide \(x+y\), ikincide \(2x+2y = 2(x+y)\) var! Yani \(\frac{a_1}{a_2} = \frac{1}{2} = \frac{b_1}{b_2}\). Doğrular <b>paraleldir</b>, \((h,k)\) kesim noktası çıkmaz!`,
    formulaUsed: R`z = x + y \implies dz = dx + dy \implies dy = dz - dx`,
    steps: [
      ["Paralelliği gör ve z dönüşümü seç", R`\(\frac{dy}{dx} = -\frac{x+y+1}{2(x+y)-1}\) denkleminde \(x+y\) ortak yapısı vardır. \(z = x + y\) dersek \(dy = dz - dx\) olur.`],
      ["Denklemde yerine koy ve düzenle", R`\[(z + 1)\,dx + (2z - 1)(dz - dx) = 0\]\[(z + 1 - 2z + 1)\,dx + (2z - 1)\,dz = 0 \implies (2 - z)\,dx + (2z - 1)\,dz = 0\]`],
      ["Değişkenlerine ayır ve polinom bölmesi yap", R`\[dx + \frac{2z - 1}{2 - z}\,dz = 0\]Kesri parçala: \(\frac{2z-1}{2-z} = \frac{-2(2-z) + 3}{2-z} = -2 + \frac{3}{2-z}\):\[dx + \left(-2 + \frac{3}{2-z}\right)dz = 0\]`],
      ["İntegral al ve z = x + y geri yaz", R`\[x - 2z - 3\ln|2 - z| = \ln c \implies x - 2(x+y) - 3\ln|2 - x - y| = \ln c\]` ]
    ],
    trap: R`\(\int \frac{3}{2-z}dz\) integralinde paydadaki \(-z\)'nin türevinden dolayı önüne <b>eksi</b> gelir: \(-3\ln|2-z|\).`
  },
  {
    id: "p1-o3",
    pdf: "pdf1",
    topic: "Homojene Dönüştürülebilen (Kesişen Doğrular)",
    badge: "5. Hafta Böl.1 · Örnek 3",
    q: R`\(\frac{dy}{dx} = 2\left(\frac{y+2}{x+y+1}\right)^2\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`Sağ tarafta \(y+2\) ve \(x+y+1\) doğruları var. Payda \(x\) yok (\(a_1=0, b_1=1\)), paydada \(a_2=1, b_2=1\). Oranlar eşit değil, kesişirler!`,
    formulaUsed: R`y+2=0,\; x+y+1=0 \implies (h,k)=(1,-2),\quad x=X+1,\; y=Y-2`,
    steps: [
      ["Kesim noktası (h, k)'yı bul", R`\[\begin{cases}k + 2 = 0 \implies k = -2 \\ h + k + 1 = 0 \implies h - 2 + 1 = 0 \implies h = 1\end{cases}\]Kesim noktası \((h,k) = (1, -2)\).`],
      ["Öteleme dönüşümü yap", R`\(x = X + 1,\; y = Y - 2\) yazılırsa sabitler yok olur:\[\frac{dY}{dX} = 2\left(\frac{Y}{X+Y}\right)^2\]`],
      ["Y = UX dönüşümü ile değişkenlerine ayır", R`\(Y = UX \implies U + X\frac{dU}{dX} = \frac{2U^2}{(1+U)^2}\):\[X\frac{dU}{dX} = \frac{2U^2 - U(1+2U+U^2)}{(1+U)^2} = -\frac{U(U^2+1)}{(1+U)^2}\]\[\frac{dX}{X} + \frac{U^2+2U+1}{U(U^2+1)}\,dU = 0\]`],
      ["Basit kesirlere ayır ve integral al", R`Payı parçala: \(\frac{(U^2+1) + 2U}{U(U^2+1)} = \frac{1}{U} + \frac{2}{U^2+1}\):\[\int \frac{dX}{X} + \int \left(\frac{1}{U} + \frac{2}{U^2+1}\right)dU = \ln c \implies \ln|X| + \ln|U| + 2\arctan U = \ln c\]\(\ln|XU| = \ln|Y| = \ln c - 2\arctan(Y/X) \implies Y = c\,e^{-2\arctan(Y/X)}\). En son \(X = x-1,\; Y = y+2\) yazılır:\[y + 2 = c\,e^{-2\arctan\left(\frac{y+2}{x-1}\right)}\]`]
    ],
    trap: R`\(\frac{U^2+2U+1}{U(U^2+1)}\) kesrinde \(U^2+1\) terimini gruplayıp \(\frac{U^2+1}{U(U^2+1)} + \frac{2U}{U(U^2+1)} = \frac{1}{U} + \frac{2}{U^2+1}\) görmek \(A, B, C\) belirsiz katsayılarıyla uğraşmaktan 5 kat hızlıdır!`
  },
  {
    id: "p1-ss1",
    pdf: "pdf1",
    topic: "Homojene Dönüştürülebilen (Yöntem Seçimi)",
    badge: "5. Hafta Böl.1 · Sıra Sizde (1)",
    q: R`Aşağıdaki iki denklem için hangi dönüşüm yöntemi seçilmelidir?<br>1) \(y' = \frac{x+y-2}{x-y+4}\)<br>2) \(y' = \frac{2x+3y+1}{4x+6y-5}\)`,
    howToSpot: R`Sadece \(x\) ve \(y\)'nin katsayı oranlarına (\(\frac{a_1}{a_2}\) ve \(\frac{b_1}{b_2}\)) bakıyoruz!`,
    formulaUsed: R`\frac{a_1}{a_2} \neq \frac{b_1}{b_2} \implies \text{Öteleme } (h,k) \quad\Big|\quad \frac{a_1}{a_2} = \frac{b_1}{b_2} \implies z = a_1x+b_1y`,
    steps: [
      ["1. Denklem için katsayı testi", R`\(a_1=1, b_1=1\) ve \(a_2=1, b_2=-1\). Oranlar: \(\frac{1}{1} \neq \frac{1}{-1}\). Doğrular <b>kesişir</b>! \(x = X+h,\; y = Y+k\) ötelemesi uygulanır.`],
      ["2. Denklem için katsayı testi", R`\(a_1=2, b_1=3\) ve \(a_2=4, b_2=6\). Oranlar: \(\frac{2}{4} = \frac{3}{6} = \frac{1}{2}\). Doğrular <b>paraleldir</b>! Paydadaki \(4x+6y = 2(2x+3y)\) olduğundan \(z = 2x+3y\) dönüşümü uygulanır.`]
    ],
    trap: R`Paralel doğruda \((h,k)\) bulmaya çalışırsan \(0 = 7\) gibi çelişki bulursun; zaman kaybetmemek için önce katsayı oranına bak!`
  },
  {
    id: "p1-ss2",
    pdf: "pdf1",
    topic: "Homojene Dönüştürülebilen (Kesişen Doğrular)",
    badge: "5. Hafta Böl.1 · Sıra Sizde (2)",
    q: R`\((x + y - 2)\,dx + (x - y + 4)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`7. Hafta Vize Hazırlık Soru 6-7-8 ile birebir aynı kalıp! \(\frac{1}{1} \neq \frac{1}{-1}\) olduğundan kesişen doğrular (öteleme) sorusudur.`,
    formulaUsed: R`x = X - 1,\; y = Y + 3 \implies Y = UX`,
    steps: [
      ["Kesim noktası (h, k)'yı bul", R`\[\begin{cases}h + k - 2 = 0 \\ h - k + 4 = 0\end{cases} \xrightarrow{\text{Topla}} 2h + 2 = 0 \implies h = -1,\; k = 3\]`],
      ["Öteleme ve Y = UX dönüşümü", R`\(x = X - 1,\; y = Y + 3\) ile denklem:\[(X+Y)\,dX + (X-Y)\,dY = 0 \implies \frac{dY}{dX} = -\frac{X+Y}{X-Y}\]\(Y = UX\) yazılırsa:\[U + X\frac{dU}{dX} = -\frac{1+U}{1-U} = \frac{U+1}{U-1} \implies X\frac{dU}{dX} = \frac{U+1 - U^2 + U}{U-1} = -\frac{U^2-2U-1}{U-1}\]`],
      ["Değişkenlerine ayır ve integral al", R`\[\frac{dX}{X} + \frac{U-1}{U^2-2U-1}\,dU = 0\]Paydanın türevi \(2(U-1)\) olduğundan:\[\ln|X| + \frac{1}{2}\ln|U^2-2U-1| = \ln c_1 \implies X^2(U^2-2U-1) = c \implies Y^2 - 2XY - X^2 = c\]`],
      ["X = x + 1 ve Y = y - 3 geri yaz", R`\[(y - 3)^2 - 2(x + 1)(y - 3) - (x + 1)^2 = c\]`]
    ],
    trap: R`Hocanın vize hazırlık PDF'inde (Soru 6-8) bu sorunun sadece sabitleri değişmiş hali (\(-3\) ve \(-1\)) çıktı! Bu kalıp vizenin banko sorusudur.`
  },
  {
    id: "p1-ss3",
    pdf: "pdf1",
    topic: "Homojene Dönüştürülebilen (Paralel Doğrular)",
    badge: "5. Hafta Böl.1 · Sıra Sizde (3)",
    q: R`\((x + y)\,dx + (x + y - 1)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`Her iki parantezde de \(x+y\) var! \(\frac{1}{1} = \frac{1}{1}\) yani doğrular paraleldir.`,
    formulaUsed: R`z = x + y \implies dy = dz - dx`,
    steps: [
      ["z = x + y dönüşümünü uygula", R`\(z = x + y \implies dy = dz - dx\) denklemde yerine konur:\[z\,dx + (z - 1)(dz - dx) = 0\]`],
      ["Düzenle ve integral al", R`\[(z - z + 1)\,dx + (z - 1)\,dz = 0 \implies dx + (z - 1)\,dz = 0\]İntegral alınırsa:\[x + \frac{z^2}{2} - z = c \implies x + \frac{(x+y)^2}{2} - (x+y) = c\]`]
    ],
    trap: R`Parantezi dağıttığında \(z\,dx\) ile \(-z\,dx\) birbirini götürür ve sadece \(1\cdot dx\) kalır!`
  },

  // ==================== PDF 2: TAM DİFERANSİYEL VE İNTEGRAL ÇARPANI ====================
  {
    id: "p2-o1",
    pdf: "pdf2",
    topic: "Tam Diferansiyel Kavramı",
    badge: "5. Hafta Böl.2 · Örnek 1 & Tanıma",
    q: R`1) \(F(x,y) = x^3 - 4x^2y + 5y^4\) fonksiyonunun tam diferansiyelini hesaplayınız.<br>2) \((2x+y)\,dx + (x-3y^2)\,dy = 0\) denklemi tam diferansiyel midir?`,
    howToSpot: R`Tam diferansiyel tanımı \(dF = F_x\,dx + F_y\,dy\)'dir. Tamlık kontrolü ise çapraz türev eşitliğidir: \(M_y = N_x\).`,
    formulaUsed: R`dF = \frac{\partial F}{\partial x}dx + \frac{\partial F}{\partial y}dy \quad\Big|\quad \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}`,
    steps: [
      ["1. Soru: Kısmi türevleri al", R`\(\frac{\partial F}{\partial x} = 3x^2 - 8xy\) ve \(\frac{\partial F}{\partial y} = -4x^2 + 20y^3\). O halde:\[dF = (3x^2 - 8xy)\,dx + (-4x^2 + 20y^3)\,dy\]`],
      ["2. Soru: Çapraz türev kontrolü (M_y = N_x)", R`\(M = 2x+y \implies M_y = \frac{\partial M}{\partial y} = 1\).<br>\(N = x-3y^2 \implies N_x = \frac{\partial N}{\partial x} = 1\).<br>\(M_y = N_x = 1\) olduğundan denklem <b>tam diferansiyeldir</b>! (7. Hafta Vize Hazırlık Soru 4'te aynen bu şık soruldu!)`]
    ],
    trap: R`Sakın \(M\)'nin \(x\)'e göre türevini alma! \(dx\)'in yanındaki \(M\)'nin <b>\(y\)'ye göre</b>, \(dy\)'nin yanındaki \(N\)'nin <b>\(x\)'e göre</b> türevi alınır.`
  },
  {
    id: "p2-o2",
    pdf: "pdf2",
    topic: "Tam Diferansiyel Denklem Çözümü",
    badge: "5. Hafta Böl.2 · Örnek 2",
    q: R`\((2x + e^y)\,dx + x e^y\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`\(M = 2x + e^y \implies M_y = e^y\) ve \(N = xe^y \implies N_x = e^y\). Birbirine eşit (\(M_y = N_x\)), yani <b>Tam Diferansiyel</b>!`,
    formulaUsed: R`F(x,y) = \int M(x,y)\,dx + \phi(y),\quad \frac{\partial F}{\partial y} = N(x,y)`,
    steps: [
      ["Tamlık kontrolü", R`\(\frac{\partial M}{\partial y} = e^y\) ve \(\frac{\partial N}{\partial x} = e^y\). Eşit olduğundan denklem tamdır.`],
      ["F(x,y) için M'nin x'e göre integralini al", R`\(y\) sabit kabul edilerek \(x\)'e göre integral alınır:\[F(x,y) = \int (2x + e^y)\,dx + \phi(y) = x^2 + x e^y + \phi(y)\]`],
      ["F'nin y'ye göre türevini N'ye eşitle", R`\[\frac{\partial F}{\partial y} = x e^y + \phi'(y) = N(x,y) = x e^y \implies \phi'(y) = 0 \implies \phi(y) = c_1\]`],
      ["Genel çözümü F(x,y) = c olarak yaz", R`\[x^2 + x e^y = c\]`]
    ],
    trap: R`Çözümü bırakırken sadece \(x^2 + xe^y\) yazarsan puan kırılır; mutlaka <b>\(= c\)</b> eşittir sabitini yazmalısın!`
  },
  {
    id: "p2-o3",
    pdf: "pdf2",
    topic: "Tam Diferansiyel Denklem Çözümü",
    badge: "5. Hafta Böl.2 · Örnek 3",
    q: R`\(\frac{y}{x}\,dx + (y^3 + \ln x)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`\(M = \frac{y}{x} \implies M_y = \frac{1}{x}\) ve \(N = y^3 + \ln x \implies N_x = \frac{1}{x}\). \(M_y = N_x\) olduğu için <b>Tam Diferansiyel</b>!`,
    formulaUsed: R`F(x,y) = \int \frac{y}{x}\,dx + \phi(y) = y\ln x + \phi(y)`,
    steps: [
      ["M'nin x'e göre integralini al", R`\[F(x,y) = \int \frac{y}{x}\,dx + \phi(y) = y\ln x + \phi(y)\]`],
      ["y'ye göre türev alıp N'ye eşitle", R`\[\frac{\partial F}{\partial y} = \ln x + \phi'(y) = y^3 + \ln x \implies \phi'(y) = y^3 \implies \phi(y) = \frac{y^4}{4}\]`],
      ["Genel çözümü yaz", R`\[y\ln x + \frac{y^4}{4} = c\]`]
    ],
    trap: R`\(\frac{\partial F}{\partial y} = N\) eşitliğinde \(\ln x\)'ler karşılıklı birbirini götürmek zorundadır. Eğer \(\phi'(y)\) içinde \(x\) kalıyorsa kesinlikle işlem hatası yapmışsındır!`
  },
  {
    id: "p2-o4",
    pdf: "pdf2",
    topic: "Tam Diferansiyel Denklem Çözümü",
    badge: "5. Hafta Böl.2 · Örnek 4",
    q: R`\((3x^2 + 3xy^2)\,dx + (3x^2y - 3y^2 + 2y)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`\(M_y = 6xy\) ve \(N_x = 6xy\). Eşit olduğu için <b>Tam Diferansiyel</b>!`,
    formulaUsed: R`F(x,y) = \int M\,dx + \phi(y) = c`,
    steps: [
      ["Tamlık kontrolü ve x'e göre integral", R`\(M_y = 6xy = N_x\). Şimdi \(M\)'yi \(x\)'e göre entegre et:\[F(x,y) = \int (3x^2 + 3xy^2)\,dx + \phi(y) = x^3 + \frac{3}{2}x^2y^2 + \phi(y)\]`],
      ["y'ye göre türev alıp φ(y)'yi bul", R`\[\frac{\partial F}{\partial y} = 3x^2y + \phi'(y) = 3x^2y - 3y^2 + 2y \implies \phi'(y) = -3y^2 + 2y\]\[\phi(y) = \int (-3y^2 + 2y)\,dy = -y^3 + y^2\]`],
      ["Genel çözümü yaz", R`\[x^3 + \frac{3}{2}x^2y^2 - y^3 + y^2 = c\]`]
    ],
    trap: R`Pratik yol: \(M\)'nin \(x\)'e göre integralini al (\(x^3 + \frac{3}{2}x^2y^2\)), sonra \(N\)'nin içindeki <b>\(x\)'siz terimlerin</b> (\(-3y^2+2y\)) \(y\)'ye göre integralini (\(-y^3+y^2\)) direkt yanına ekle ve \(=c\) de! 10 saniyede biter!`
  },
  {
    id: "p2-o5",
    pdf: "pdf2",
    topic: "Tam Diferansiyel (Logaritma Özelliği)",
    badge: "5. Hafta Böl.2 · Örnek 5",
    q: R`\((x-1)^{-1}y\,dx + \left[\ln(2x-2) + \frac{1}{y}\right]dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`\(M = \frac{y}{x-1} \implies M_y = \frac{1}{x-1}\). \(N = \ln(2x-2) + \frac{1}{y} \implies N_x = \frac{2}{2x-2} = \frac{1}{x-1}\). Tam diferansiyel!`,
    formulaUsed: R`\ln(2x-2) = \ln(2(x-1)) = \ln 2 + \ln(x-1)`,
    steps: [
      ["M'nin x'e göre integralini al", R`\[F(x,y) = \int \frac{y}{x-1}\,dx + \phi(y) = y\ln|x-1| + \phi(y)\]`],
      ["Logaritma özelliğini kullanarak φ'(y)'yi bul", R`\[\frac{\partial F}{\partial y} = \ln|x-1| + \phi'(y) = \ln(2x-2) + \frac{1}{y} = \ln 2 + \ln|x-1| + \frac{1}{y}\]Buradan \(\ln|x-1|\) terimleri sadeleşir:\[\phi'(y) = \ln 2 + \frac{1}{y} \implies \phi(y) = y\ln 2 + \ln|y|\]`],
      ["Genel çözümü yaz", R`\[y\ln|x-1| + y\ln 2 + \ln|y| = c \quad\text{veya}\quad y\ln|2x-2| + \ln|y| = c\]`]
    ],
    trap: R`\(\ln(2x-2) = \ln 2 + \ln(x-1)\) ayrımını yapmazsan \(\ln(x-1)\) ile \(\ln(2x-2)\) birbirini götürmez sanıp panikleyebilirsin!`
  },
  {
    id: "p2-o6",
    pdf: "pdf2",
    topic: "Tam Diferansiyel (Başlangıç Değer Problemi)",
    badge: "5. Hafta Böl.2 · Örnek 6 (BDP)",
    q: R`\(\left(\frac{3-y}{x^2}\right)dx + \left(\frac{y^2-2x}{xy^2}\right)dy = 0,\quad y(-1) = 1\) başlangıç değer problemini çözünüz.`,
    howToSpot: R`Önce kesirleri ayır: \(M = 3x^{-2} - yx^{-2}\) ve \(N = \frac{1}{x} - \frac{2}{y^2}\). Türevler: \(M_y = -x^{-2}\) ve \(N_x = -x^{-2}\). Tam diferansiyel + Başlangıç koşulu!`,
    formulaUsed: R`F(x,y) = c \xrightarrow{x=-1,\; y=1} c \text{ bulunur}`,
    steps: [
      ["M'nin x'e göre integralini al", R`\[F(x,y) = \int (3x^{-2} - yx^{-2})\,dx + \phi(y) = -\frac{3}{x} + \frac{y}{x} + \phi(y) = \frac{y-3}{x} + \phi(y)\]`],
      ["φ(y)'yi bul ve genel çözümü yaz", R`\[\frac{\partial F}{\partial y} = \frac{1}{x} + \phi'(y) = \frac{1}{x} - \frac{2}{y^2} \implies \phi'(y) = -2y^{-2} \implies \phi(y) = \frac{2}{y}\]Genel çözüm: \(\frac{y-3}{x} + \frac{2}{y} = c\).`],
      ["Başlangıç koşulu y(-1) = 1'i uygula", R`\(x = -1,\; y = 1\) yazılırsa:\[\frac{1-3}{-1} + \frac{2}{1} = c \implies 2 + 2 = 4 \implies c = 4\]Özel çözüm: \(\frac{y-3}{x} + \frac{2}{y} = 4 \implies 2x + y(y-3) - 4xy = 0\).`]
    ],
    trap: R`Kesirli ifadelerde bölüm türevi/integrali almak yerine \(\frac{y^2-2x}{xy^2} = \frac{1}{x} - \frac{2}{y^2}\) şeklinde terim terime ayırmak işlemi 10 kat kolaylaştırır!`
  },
  {
    id: "p2-a14",
    pdf: "pdf2",
    topic: "Tam Diferansiyel Alıştırmaları (1–4)",
    badge: "5. Hafta Böl.2 · Alıştırma 1, 2, 3, 4",
    q: R`Slayttaki 4 Tam Diferansiyel alıştırmasını çözünüz:<br>1) \((2xy+3)\,dx + (x^2-1)\,dy = 0\)<br>2) \((\cos y + y\cos x)\,dx + (\sin x - x\sin y)\,dy = 0\)<br>3) \((3x^2y+2)\,dx + (x^3+6y)\,dy = 0,\;\; y(0)=1\)<br>4) \((ye^{xy}+2x)\,dx + (xe^{xy}-2y)\,dy = 0\)`,
    howToSpot: R`Dördünde de \(M_y = N_x\) sağlanır. Pratik kural: \(\int M\,dx + \int (N\text{'deki }x\text{'siz terimler})\,dy = c\).`,
    formulaUsed: R`F(x,y) = \int M\,dx + \int N_{\text{yalnız }y}\,dy = c`,
    steps: [
      ["Alıştırma 1 Çözümü", R`\(M_y = 2x = N_x\). \(F = \int (2xy+3)\,dx + \int (-1)\,dy = x^2y + 3x - y = c\).`],
      ["Alıştırma 2 Çözümü", R`\(M_y = -\sin y + \cos x = N_x\). \(F = \int (\cos y + y\cos x)\,dx = x\cos y + y\sin x = c\) (\(N\)'de \(x\)'siz terim yok, \(\phi=0\)).`],
      ["Alıştırma 3 Çözümü (BDP)", R`\(M_y = 3x^2 = N_x\). Genel çözüm: \(x^3y + 2x + 3y^2 = c\).<br>\(y(0)=1 \implies 0 + 0 + 3(1)^2 = c \implies c = 3\). Özel çözüm: \(x^3y + 2x + 3y^2 = 3\).`],
      ["Alıştırma 4 Çözümü", R`\(M_y = e^{xy} + xye^{xy} = N_x\). \(\int ye^{xy}\,dx = e^{xy}\) olduğundan:<br>Genel çözüm: \(e^{xy} + x^2 - y^2 = c\).`]
    ],
    trap: R`\(\int y e^{xy}\,dx\) integralinde \(x\)'e göre integral alındığı için iç türev olan \(y\) zaten önde çarpan olarak duruyor; integrali doğrudan \(e^{xy}\)'dir!`
  },
  {
    id: "p2-o7",
    pdf: "pdf2",
    topic: "İntegral Çarpanı — Durum a: μ(x)",
    badge: "5. Hafta Böl.2 · Örnek 7",
    q: R`\((x - y)\,dx - dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`\(M = x-y \implies M_y = -1\) ve \(N = -1 \implies N_x = 0\). Eşit değil (\(M_y \neq N_x\)). \(N = -1\) çok sade olduğu için \(\frac{M_y - N_x}{N}\) formülünü dene!`,
    formulaUsed: R`f(x) = \frac{M_y - N_x}{N} \implies \mu(x) = e^{\int f(x)\,dx}`,
    steps: [
      ["İntegral çarpanı μ(x)'i bul", R`\[f(x) = \frac{M_y - N_x}{N} = \frac{-1 - 0}{-1} = 1 \implies \mu(x) = e^{\int 1\,dx} = e^x\]`],
      ["Denklemi e^x ile çarp (Artık Tam Diferansiyel!)", R`\[e^x(x - y)\,dx - e^x\,dy = 0\]`],
      ["Tam diferansiyel olarak çöz (y'den başlamak daha kolay!)", R`\(N_{\text{yeni}} = -e^x\) olduğu için \(y\)'ye göre integral alırsak:\[F(x,y) = \int (-e^x)\,dy + \psi(x) = -y e^x + \psi(x)\]\(x\)'e göre türev alıp \(M_{\text{yeni}}\)'ye eşitle:\[\frac{\partial F}{\partial x} = -y e^x + \psi'(x) = x e^x - y e^x \implies \psi'(x) = x e^x \implies \psi(x) = e^x(x - 1)\]Genel çözüm: \(e^x(x - y - 1) = c\).`]
    ],
    trap: R`İntegral çarpanıyla çarptıktan sonra hangi terim daha kolaysa (\(-e^x dy\)) oradan integral alarak başlamak kısmi integral zahmetini azaltır!`
  },
  {
    id: "p2-o8",
    pdf: "pdf2",
    topic: "İntegral Çarpanı — Durum b: μ(y)",
    badge: "5. Hafta Böl.2 · Örnek 8",
    q: R`\(y\,dx + (3 + 3x - y)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`\(M = y \implies M_y = 1\) ve \(N = 3+3x-y \implies N_x = 3\). \(M = y\) yalnız \(y\)'li olduğu için paydada \(M\) olan \(g(y) = \frac{N_x - M_y}{M}\) formülünü kullan!`,
    formulaUsed: R`g(y) = -\frac{M_y - N_x}{M} = \frac{N_x - M_y}{M} \implies \mu(y) = e^{\int g(y)\,dy}`,
    steps: [
      ["İntegral çarpanı μ(y)'yi bul", R`\[g(y) = -\frac{1 - 3}{y} = \frac{2}{y} \implies \mu(y) = e^{\int \frac{2}{y}\,dy} = e^{2\ln y} = y^2\]`],
      ["Denklemi y² ile çarp", R`\[y^3\,dx + (3y^2 + 3xy^2 - y^3)\,dy = 0\]`],
      ["Tam diferansiyel olarak çöz", R`\[F(x,y) = \int y^3\,dx + \phi(y) = x y^3 + \phi(y)\]\[\frac{\partial F}{\partial y} = 3xy^2 + \phi'(y) = 3y^2 + 3xy^2 - y^3 \implies \phi'(y) = 3y^2 - y^3 \implies \phi(y) = y^3 - \frac{y^4}{4}\]Genel çözüm: \(x y^3 + y^3 - \frac{y^4}{4} = c\).`]
    ],
    trap: R`7. Hafta Vize Hazırlık Soru 12-13'te bu sorunun neredeyse aynısı (\(y\,dx + (3x - y^3)\,dy = 0\)) soruldu ve orada da \(\mu = y^2\) çıktı!`
  },
  {
    id: "p2-o9",
    pdf: "pdf2",
    topic: "İntegral Çarpanı — Durum c: μ(xy)",
    badge: "5. Hafta Böl.2 · Örnek 9",
    q: R`\(y(2xy + 1)\,dx + x(1 + 2xy - x^3y^3)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`\(dx\)'in önünde \(y\) çarpanı, \(dy\)'nin önünde \(x\) çarpanı var ve parantez içleri hep \(xy\) çarpımına bağlı! Yani \(y\,f(xy)\,dx + x\,g(xy)\,dy = 0\) kalıbı!`,
    formulaUsed: R`\mu(x,y) = \frac{1}{xM - yN}`,
    steps: [
      ["xM - yN ifadesini hesapla ve μ'yü bul", R`\[xM - yN = xy(2xy + 1) - xy(1 + 2xy - x^3y^3) = x^4y^4\]Buradan \(\mu = \frac{1}{x^4y^4} = x^{-4}y^{-4}\).`],
      ["Denklemi μ ile çarp", R`\[(2x^{-3}y^{-2} + x^{-4}y^{-3})\,dx + (x^{-3}y^{-4} + 2x^{-2}y^{-3} - y^{-1})\,dy = 0\]`],
      ["Tam diferansiyel olarak integral al", R`\(M\)'yi \(x\)'e göre entegre et:\[F(x,y) = \int (2x^{-3}y^{-2} + x^{-4}y^{-3})\,dx + \phi(y) = -x^{-2}y^{-2} - \frac{1}{3}x^{-3}y^{-3} + \phi(y)\]\(y\)'ye göre türev alıp \(N\)'ye eşitle:\[\frac{\partial F}{\partial y} = 2x^{-2}y^{-3} + x^{-3}y^{-4} + \phi'(y) = x^{-3}y^{-4} + 2x^{-2}y^{-3} - y^{-1} \implies \phi'(y) = -\frac{1}{y} \implies \phi(y) = -\ln|y|\]Genel çözüm (\(-1\) ile çarpılırsa): \(\frac{1}{x^2y^2} + \frac{1}{3x^3y^3} + \ln|y| = c\).`]
    ],
    trap: R`Homojen olmayan ama \(xy\) çarpımı içeren denklemlerde payda \(xM - yN\) (arada <b>eksi</b> var), homojen denklemlerde ise \(xM + yN\) (arada <b>artı</b> var) olur!`
  },
  {
    id: "p2-o10",
    pdf: "pdf2",
    topic: "İntegral Çarpanı — Durum d: Homojen Denklem",
    badge: "5. Hafta Böl.2 · Örnek 10",
    q: R`\((x^4 + y^4)\,dx - xy^3\,dy = 0\) diferansiyel denkleminin genel çözümünü integral çarpanı yöntemiyle bulunuz.`,
    howToSpot: R`Terimlerin derecelerine bak: \(x^4\) (4. derece), \(y^4\) (4. derece), \(x^1y^3\) (1+3=4. derece). Denklem 4. dereceden <b>homojendir</b> ama \(M_y = 4y^3 \neq N_x = -y^3\) (tam değil).`,
    formulaUsed: R`\text{Homojen ise: }\mu(x,y) = \frac{1}{xM + yN}`,
    steps: [
      ["xM + yN hesapla ve μ'yü bul", R`\[xM + yN = x(x^4 + y^4) + y(-xy^3) = x^5 + xy^4 - xy^4 = x^5 \implies \mu = \frac{1}{x^5} = x^{-5}\]`],
      ["Denklemi x^{-5} ile çarp", R`\[(x^{-1} + x^{-5}y^4)\,dx - x^{-4}y^3\,dy = 0\]`],
      ["Tam diferansiyel olarak çöz", R`\[F(x,y) = \int (x^{-1} + x^{-5}y^4)\,dx + \phi(y) = \ln|x| - \frac{y^4}{4x^4} + \phi(y)\]\(y\)'ye göre türevi \(-x^{-4}y^3 = N\) olduğundan \(\phi'(y) = 0\). Genel çözüm:\[\ln|x| - \frac{y^4}{4x^4} = c\]`]
    ],
    trap: R`Normalde homojen denklemi \(y = ux\) ile de çözebilirsin ama \(xM + yN = x^5\) gibi tek terimli çıktığında \(\mu = \frac{1}{xM+yN}\) kullanmak çok daha hızlıdır!`
  },
  {
    id: "p2-o11",
    pdf: "pdf2",
    topic: "İntegral Çarpanı — Durum e: Çarpanlarına Ayrılan",
    badge: "5. Hafta Böl.2 · Örnek 11",
    q: R`\((x^3y - xy)\,dx + (2x^2y^2 + 3x^2)\,dy = 0\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`İlk parantez \(y\) ortak çarpanına, ikinci parantez \(x^2\) ortak çarpanına alınabiliyor: \(y(x^3-x)\,dx + x^2(2y^2+3)\,dy = 0\). Yani değişkenlerine ayrılabilir!`,
    formulaUsed: R`f_1(x)g_1(y)\,dx + f_2(x)g_2(y)\,dy = 0 \implies \mu = \frac{1}{f_2(x)g_1(y)} = \frac{1}{x^2y}`,
    steps: [
      ["Ortak çarpanlara ayır ve μ = 1/(x²y) ile çarp", R`\[y(x^3-x)\,dx + x^2(2y^2+3)\,dy = 0 \xrightarrow{\cdot \frac{1}{x^2y}} \left(x - \frac{1}{x}\right)dx + \left(2y + \frac{3}{y}\right)dy = 0\]`],
      ["Doğrudan terim terime integral al", R`\[\frac{x^2}{2} - \ln|x| + y^2 + 3\ln|y| = \ln c \implies \frac{x^2}{2} + y^2 = \ln\left|\frac{cx}{y^3}\right|\]`]
    ],
    trap: R`Uzun uzun \(M_y - N_x\) aramadan önce parantezlerin ortak çarpanla \(f(x)g(y)\) şeklinde ayrılıp ayrılmadığına göz ucuyla bak!`
  },
  {
    id: "p2-a58",
    pdf: "pdf2",
    topic: "İntegral Çarpanı Alıştırmaları (5–8)",
    badge: "5. Hafta Böl.2 · Alıştırma 5, 6, 7, 8",
    q: R`Slayttaki İntegral Çarpanı alıştırmalarını çözünüz:<br>5) \((y^2+1)\,dx + xy\,dy = 0\)<br>6) \(y\,dx - x\,dy = 0\) (\(\mu_1 = 1/x^2\) ve \(\mu_2 = 1/y^2\) ile)<br>7) \((x^2+y^2+x)\,dx + xy\,dy = 0\)<br>8) \(y(1+xy)\,dx - x\,dy = 0\)`,
    howToSpot: R`\(M_y \neq N_x\) olduğu için \(\frac{M_y-N_x}{N}\) veya \(\frac{N_x-M_y}{M}\) test edilir.`,
    formulaUsed: R`\mu(x) = e^{\int \frac{M_y-N_x}{N}dx} \quad\text{veya}\quad \mu(y) = e^{\int \frac{N_x-M_y}{M}dy}`,
    steps: [
      ["Alıştırma 5 Çözümü", R`\(M_y = 2y,\; N_x = y \implies \frac{M_y-N_x}{N} = \frac{y}{xy} = \frac{1}{x} \implies \mu(x) = x\).<br>\(x\) ile çarp: \((xy^2+x)\,dx + x^2y\,dy = 0 \implies \frac{x^2y^2}{2} + \frac{x^2}{2} = c_1 \implies x^2(y^2+1) = c\).`],
      ["Alıştırma 6 Çözümü (İntegral çarpanı tek değildir!)", R`\(\mu_1 = \frac{1}{x^2}\) ile: \(\frac{y}{x^2}dx - \frac{1}{x}dy = d\left(-\frac{y}{x}\right) = 0 \implies -\frac{y}{x} = c\).<br>\(\mu_2 = \frac{1}{y^2}\) ile: \(\frac{1}{y}dx - \frac{x}{y^2}dy = d\left(\frac{x}{y}\right) = 0 \implies \frac{x}{y} = c\).`],
      ["Alıştırma 7 Çözümü", R`\(M_y = 2y,\; N_x = y \implies \frac{M_y-N_x}{N} = \frac{y}{xy} = \frac{1}{x} \implies \mu(x) = x\).<br>\(x\) ile çarp: \((x^3+xy^2+x^2)\,dx + x^2y\,dy = 0 \implies \frac{x^4}{4} + \frac{x^2y^2}{2} + \frac{x^3}{3} = c\).`],
      ["Alıştırma 8 Çözümü", R`\(M = y+xy^2 \implies M_y = 1+2xy\) ve \(N = -x \implies N_x = -1\).<br>\(g(y) = -\frac{M_y-N_x}{M} = -\frac{2+2xy}{y(1+xy)} = -\frac{2}{y} \implies \mu(y) = e^{-2\ln y} = \frac{1}{y^2}\).<br>\(\frac{1}{y^2}\) ile çarp: \(\left(\frac{1}{y} + x\right)dx - \frac{x}{y^2}dy = 0 \implies \frac{x}{y} + \frac{x^2}{2} = c\).`]
    ],
    trap: R`Alıştırma 8'de \(\left(\frac{1}{y}\right)dx - \frac{x}{y^2}dy = d\left(\frac{x}{y}\right)\) kalıbını görmek integrali saniyesinde bitirir!`
  },

  // ==================== PDF 3: LİNEER, BERNOULLİ VE RİCCATİ ====================
  {
    id: "p3-o13",
    pdf: "pdf3",
    topic: "Lineer Diferansiyel Denklem (Temel Örnekler 1–3)",
    badge: "6. Hafta · Örnek 1, 2, 3",
    q: R`Aşağıdaki lineer diferansiyel denklemlerin genel çözümlerini bulunuz:<br>1) \(\frac{dy}{dx} - 2xy = x\)<br>2) \(\frac{dy}{dx} + y = e^{-x}\)<br>3) \(x\frac{dy}{dx} + y = x^2\)`,
    howToSpot: R`Denklemlerde sadece \(y'\) ve \(y^1\) var! Standart biçim: \(y' + P(x)y = Q(x)\).`,
    formulaUsed: R`\mu(x) = e^{\int P(x)dx} \implies \mu(x)\cdot y = \int \mu(x)Q(x)\,dx + c`,
    steps: [
      ["Örnek 1: y' - 2xy = x", R`\(P(x) = -2x,\; Q(x) = x\). İntegral çarpanı: \(\mu = e^{\int -2x\,dx} = e^{-x^2}\).<br>Formül: \(e^{-x^2}\cdot y = \int x e^{-x^2}dx + c = -\frac{1}{2}e^{-x^2} + c \implies y = -\frac{1}{2} + c e^{x^2}\).`],
      ["Örnek 2: y' + y = e^{-x}", R`\(P(x) = 1,\; Q(x) = e^{-x}\). İntegral çarpanı: \(\mu = e^{\int 1\,dx} = e^x\).<br>Formül: \(e^x \cdot y = \int e^x e^{-x}dx + c = \int 1\,dx + c = x + c \implies y = (x + c)e^{-x}\).`],
      ["Örnek 3: xy' + y = x² (Önce x'e böl!)", R`Standart biçim: \(y' + \frac{1}{x}y = x \implies P(x) = \frac{1}{x},\; Q(x) = x\).<br>\(\mu = e^{\int \frac{1}{x}dx} = x\). Formül: \(x \cdot y = \int x \cdot x\,dx + c = \frac{x^3}{3} + c \implies y = \frac{x^2}{3} + \frac{c}{x}\).`]
    ],
    trap: R`Örnek 3'te denklemi \(x\)'e bölmeden \(P(x)=1\) dersen bütün çözüm çöpe gider! İlk iş \(y'\)'nün katsayısını \(1\) yapmaktır.`
  },
  {
    id: "p3-o45",
    pdf: "pdf3",
    topic: "Lineer Denklem (Trigonometrik & BDP)",
    badge: "6. Hafta · Örnek 4 ve Örnek 5",
    q: R`1) (Örnek 4) \(\frac{dy}{dx} + y\tan x = \sin 2x\) genel çözümünü bulunuz.<br>2) (Örnek 5) \(\frac{dy}{dx} - \frac{2xy}{1+x^2} = 1+x^2,\;\; y(0)=3\) BDP çözümünü bulunuz.`,
    howToSpot: R`İkisi de doğrudan \(y' + P(x)y = Q(x)\) standart lineer biçimindedir.`,
    formulaUsed: R`\int \tan x\,dx = -\ln|\cos x| \quad\Big|\quad \sin 2x = 2\sin x\cos x`,
    steps: [
      ["Örnek 4 Çözümü", R`\(P(x) = \tan x \implies \mu = e^{\int \tan x\,dx} = e^{-\ln|\cos x|} = \frac{1}{\cos x}\).<br>Formül: \(\frac{y}{\cos x} = \int \frac{\sin 2x}{\cos x}dx + c = \int \frac{2\sin x\cos x}{\cos x}dx + c = \int 2\sin x\,dx + c = -2\cos x + c\).<br>Her yeri \(\cos x\) ile çarp: \(y = -2\cos^2 x + c\cos x\).`],
      ["Örnek 5 Çözümü (BDP)", R`\(P(x) = -\frac{2x}{1+x^2} \implies \mu = e^{-\int \frac{2x}{1+x^2}dx} = e^{-\ln(1+x^2)} = \frac{1}{1+x^2}\).<br>Formül: \(\frac{y}{1+x^2} = \int \frac{1+x^2}{1+x^2}dx + c = \int 1\,dx + c = x + c \implies y = (1+x^2)(x + c)\).<br>Başlangıç koşulu \(y(0) = 3 \implies 3 = (1+0)(0+c) \implies c = 3\).<br>Özel çözüm: \(y = (x^2+1)(x+3)\).`]
    ],
    trap: R`\(\int \tan x\,dx = \int \frac{\sin x}{\cos x}dx = -\ln|\cos x|\) integralindeki eksi işaretini unutursan \(\cos x\) payda yerine paya geçer ve \(\sin 2x\) sadeleşmez!`
  },
  {
    id: "p3-o6",
    pdf: "pdf3",
    topic: "Lineer Denklem (Roller Değişiyor: x'e Göre Lineer!)",
    badge: "6. Hafta · Örnek 6 (Çok Önemli Taktik!)",
    q: R`\(\frac{dy}{dx} = \frac{1}{x + y^2}\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`Paydada \(x + y^2\) var; \(y^2\) yüzünden \(y\)'ye göre lineer değil! Ama denklemi <b>ters çevirirsek</b> (\(\frac{dx}{dy} = x + y^2\)), \(x\) sadece 1. kuvvette olduğu için <b>\(x\)'e göre lineer</b> olur!`,
    formulaUsed: R`\frac{dx}{dy} + P(y)x = Q(y) \implies \mu(y) = e^{\int P(y)dy}`,
    steps: [
      ["Ters çevir ve x'e göre standart lineer biçime getir", R`\[\frac{dx}{dy} = x + y^2 \implies \frac{dx}{dy} - x = y^2\]Burada bağımlı değişken \(x\), bağımsız değişken \(y\)'dir: \(P(y) = -1,\; Q(y) = y^2\).`],
      ["İntegral çarpanı μ(y)'yi bul", R`\[\mu(y) = e^{\int -1\,dy} = e^{-y}\]`],
      ["Genel çözümü yaz (Kısmi İntegral)", R`\[e^{-y}\cdot x = \int y^2 e^{-y}\,dy + c\]İki kez kısmi integral (veya Tablo Yöntemi: \(y^2 \to 2y \to 2\) ve \(e^{-y} \to -e^{-y} \to e^{-y} \to -e^{-y}\)) uygulanırsa:\[e^{-y}\cdot x = -e^{-y}(y^2 + 2y + 2) + c \implies x = -(y^2 + 2y + 2) + c e^y\]`]
    ],
    trap: R`Bir denklemde \(y^2, \sin y, e^y\) gibi ifadeler varken \(x\) yalnız 1. kuvvette duruyorsa, hiç düşünmeden \(\frac{dy}{dx}\)'i takla attırıp \(\frac{dx}{dy}\) yap!`
  },
  {
    id: "p3-o7a14",
    pdf: "pdf3",
    topic: "Lineer Denklem (Örnek 7 & Alıştırma 1–4)",
    badge: "6. Hafta · Örnek 7 ve Alıştırma 1–4",
    q: R`Slayttaki diğer Lineer Denklem sorularını çözünüz:<br>• Örnek 7: \(y' + 2y = 4,\; y(0)=1\)<br>• Alıştırma 1: \(y' + 3y = 6\)<br>• Alıştırma 2: \(xy' - y = x^2\)<br>• Alıştırma 3: \(y' + 2xy = x,\; y(0)=1\)<br>• Alıştırma 4: \(\frac{dx}{dy} + x = y\)`,
    howToSpot: R`Hepsi 1. mertebeden lineer denklem (\(\mu \cdot y = \int \mu Q\,dx + c\)).`,
    formulaUsed: R`\mu = e^{\int P\,dx} \implies \mu y = \int \mu Q\,dx + c`,
    steps: [
      ["Örnek 7 & Alıştırma 1 (Sabit katsayılı)", R`• Örnek 7: \(\mu = e^{2x} \implies e^{2x}y = \int 4e^{2x}dx + c = 2e^{2x} + c \implies y = 2 + ce^{-2x}\). \(y(0)=1 \implies c = -1 \implies y = 2 - e^{-2x}\).<br>• Alıştırma 1: \(\mu = e^{3x} \implies e^{3x}y = \int 6e^{3x}dx + c = 2e^{3x} + c \implies y = 2 + ce^{-3x}\).`],
      ["Alıştırma 2: xy' - y = x²", R`\(x\)'e böl: \(y' - \frac{1}{x}y = x \implies \mu = e^{-\ln x} = \frac{1}{x}\).<br>\(\frac{y}{x} = \int \frac{x}{x}dx + c = x + c \implies y = x^2 + cx\).`],
      ["Alıştırma 3: y' + 2xy = x, y(0)=1", R`\(\mu = e^{x^2} \implies e^{x^2}y = \int x e^{x^2}dx + c = \frac{1}{2}e^{x^2} + c \implies y = \frac{1}{2} + ce^{-x^2}\).<br>\(y(0)=1 \implies 1 = \frac{1}{2} + c \implies c = \frac{1}{2} \implies y = \frac{1 + e^{-x^2}}{2}\).`],
      ["Alıştırma 4: dx/dy + x = y (x'e göre lineer)", R`\(\mu(y) = e^y \implies e^y \cdot x = \int y e^y dy + c = e^y(y - 1) + c \implies x = y - 1 + ce^{-y}\).`]
    ],
    trap: R`\(y' + ay = b\) gibi sabit katsayılılarda özel çözüm her zaman \(\frac{b}{a}\)'dır; genel çözüm doğrudan \(y = \frac{b}{a} + ce^{-ax}\) olarak 2 saniyede yazılabilir!`
  },
  {
    id: "p3-o8",
    pdf: "pdf3",
    topic: "Bernoulli Diferansiyel Denklemi",
    badge: "6. Hafta · Örnek 8",
    q: R`\(\frac{dy}{dx} - \frac{y}{x} = -\frac{y^2}{x}\) diferansiyel denkleminin genel çözümünü bulunuz.`,
    howToSpot: R`Sağ tarafta \(y^2\) çarpanı var (\(n = 2\))! Özel çözüm verilmemiş, o halde <b>Bernoulli Denklemi</b>dir.`,
    formulaUsed: R`n=2 \implies z = y^{1-2} = y^{-1} = \frac{1}{y} \implies \frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)`,
    steps: [
      ["Her tarafı y²'ye böl ve z = y^{-1} dönüşümü yap", R`\[y^{-2}\frac{dy}{dx} - \frac{1}{x}y^{-1} = -\frac{1}{x}\]\[z = y^{-1} \implies \frac{dz}{dx} = -y^{-2}\frac{dy}{dx} \implies -y^{-2}\frac{dy}{dx} = -\frac{dz}{dx}\]`],
      ["z'ye göre Lineer Denklemi kur", R`\[-\frac{dz}{dx} - \frac{z}{x} = -\frac{1}{x} \implies \frac{dz}{dx} + \frac{1}{x}z = \frac{1}{x}\]`],
      ["Lineer denklemi çöz ve z = 1/y geri yaz", R`\(P(x) = \frac{1}{x} \implies \mu(x) = x\).\[x \cdot z = \int x \cdot \frac{1}{x}\,dx + c = x + c \implies z = \frac{x+c}{x}\]En son \(z = \frac{1}{y}\) yazılıp ters çevrilirse:\[y = \frac{x}{x+c}\]`]
    ],
    trap: R`\(z = \frac{x+c}{x}\) bulduktan sonra \(y = \frac{x}{x} + \frac{x}{c}\) gibi <b>sakın paydaları ayrı ayrı ters çevirme</b>! Paydayı tek kesir yapıp komple ters çevirmelisin: \(y = \frac{x}{x+c}\).`
  },
  {
    id: "p3-o910",
    pdf: "pdf3",
    topic: "Bernoulli Denklemi (n = 4 Örnekleri)",
    badge: "6. Hafta · Örnek 9 ve Örnek 10",
    q: R`Aşağıdaki Bernoulli denklemlerini çözünüz:<br>1) (Örnek 9) \(x\frac{dy}{dx} + y = -2x^6y^4\)<br>2) (Örnek 10) \(3x\frac{dy}{dx} + y + x^2y^4 = 0\)`,
    howToSpot: R`Her iki denklemde de \(y^4\) terimi var (\(n = 4\)). Dönüşüm: \(z = y^{1-4} = y^{-3}\)!`,
    formulaUsed: R`z = y^{-3} \implies \frac{dz}{dx} = -3y^{-4}\frac{dy}{dx},\quad \frac{dz}{dx} - 3P(x)z = -3Q(x)`,
    steps: [
      ["Örnek 9 Çözümü", R`Önce \(x\)'e böl: \(y' + \frac{1}{x}y = -2x^5y^4 \implies P = \frac{1}{x},\; Q = -2x^5,\; n = 4\).<br>\(z = y^{-3}\) ile lineer denklem (\(1-n = -3\) ile çarp):\[\frac{dz}{dx} - \frac{3}{x}z = 6x^5\]\(\mu = e^{-3\ln x} = x^{-3}\). Buradan:\[x^{-3}z = \int x^{-3}\cdot 6x^5\,dx + c = \int 6x^2\,dx + c = 2x^3 + c \implies y^{-3} = (2x^3 + c)x^3\]`],
      ["Örnek 10 Çözümü", R`Önce \(3x\)'e böl ve \(y^4\)'lü terimi sağa at: \(y' + \frac{1}{3x}y = -\frac{x}{3}y^4\).<br>\(z = y^{-3}\) ile (\(-3\) ile çarpılır):\[\frac{dz}{dx} - \frac{1}{x}z = x\]\(\mu = e^{-\ln x} = \frac{1}{x}\). Buradan:\[\frac{z}{x} = \int \frac{x}{x}\,dx + c_1 = x + c_1 \implies z = x^2 + c_1x \implies y^3 = \frac{1}{x^2 + c_1x}\]`]
    ],
    trap: R`Kısayol formülü \(\frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)\)'i kullanırken denklemin <b>mutlaka önce \(y'\)'nün katsayısı 1 olacak şekilde</b> standart biçime getirilmiş olması gerekir!`
  },
  {
    id: "p3-o1112a58",
    pdf: "pdf3",
    topic: "Bernoulli Denklemi (Örnek 11–12 & Alıştırma 5–8)",
    badge: "6. Hafta · Örnek 11, 12 ve Alıştırma 5–8",
    q: R`Slayttaki diğer Bernoulli sorularını çözünüz:<br>• Örnek 11: \(y' + y = y^2\)<br>• Örnek 12: \(xy' + y = x^2y^2\)<br>• Alıştırma 5: \(y' + y = xy^2\)<br>• Alıştırma 6: \(y' + \frac{1}{x}y = y^3\)<br>• Alıştırma 7: \(y' - \frac{2}{x}y = -x^2y^2\)<br>• Alıştırma 8: \(y' + y = y^2e^x\)`,
    howToSpot: R`\(y^2\) olanlarda \(n=2 \implies z = y^{-1}\) (\((1-n) = -1\)), \(y^3\) olanda \(n=3 \implies z = y^{-2}\) (\((1-n) = -2\)).`,
    formulaUsed: R`z = y^{1-n} \implies z' + (1-n)P(x)z = (1-n)Q(x)`,
    steps: [
      ["Örnek 11 & Örnek 12 Çözümleri", R`• <b>Örnek 11:</b> \(z=y^{-1} \implies z' - z = -1 \implies \mu=e^{-x} \implies e^{-x}z = e^{-x} + c_1 \implies z = 1 + c_1e^x \implies y = \frac{1}{1+c_1e^x}\).<br>• <b>Örnek 12:</b> \(x\)'e böl: \(y' + \frac{1}{x}y = xy^2\) (7. Hafta Vize Hazırlık Soru 17-18!). \(z=y^{-1} \implies z' - \frac{1}{x}z = -x \implies \mu = \frac{1}{x} \implies \frac{z}{x} = -x + c_1 \implies y = \frac{1}{x(c_1-x)}\).`],
      ["Alıştırma 5 & Alıştırma 6 Çözümleri", R`• <b>Alıştırma 5:</b> \(z=y^{-1} \implies z' - z = -x \implies \mu=e^{-x} \implies e^{-x}z = \int -xe^{-x}dx + c = e^{-x}(x+1) + c \implies y = \frac{1}{x+1+ce^x}\).<br>• <b>Alıştırma 6:</b> \(n=3 \implies z=y^{-2}\). \(-2\) ile çarp: \(z' - \frac{2}{x}z = -2 \implies \mu = x^{-2} \implies x^{-2}z = \int -2x^{-2}dx + c = \frac{2}{x} + c \implies y^{-2} = 2x + cx^2\).`],
      ["Alıştırma 7 & Alıştırma 8 Çözümleri", R`• <b>Alıştırma 7:</b> \(z=y^{-1} \implies z' + \frac{2}{x}z = x^2 \implies \mu = x^2 \implies x^2z = \int x^4dx + c = \frac{x^5}{5} + c \implies \frac{1}{y} = \frac{x^3}{5} + \frac{c}{x^2}\).<br>• <b>Alıştırma 8:</b> \(z=y^{-1} \implies z' - z = -e^x \implies \mu=e^{-x} \implies e^{-x}z = \int -1\,dx + c = c - x \implies z = e^x(c-x) \implies y = \frac{e^{-x}}{c-x}\).`]
    ],
    trap: R`Örnek 12 (\(xy'+y=x^2y^2\)), hocanın 7. Hafta Vize Hazırlık PDF'inde Soru 17 ve 18 olarak birebir soruldu!`
  },
  {
    id: "p3-o13r",
    pdf: "pdf3",
    topic: "Riccati Denklemi (Teorem 1: y = y₁ + z ile Bernoulli'ye İndirgeme)",
    badge: "6. Hafta · Örnek 13",
    q: R`\(\frac{dy}{dx} - \frac{3}{x}y - \frac{4}{x^2} = y^2\) diferansiyel denkleminin bir özel çözümü \(y_1 = -\frac{2}{x}\) olduğuna göre genel çözümünü \(y = y_1 + z\) dönüşümüyle bulunuz.`,
    howToSpot: R`Soruda <b>"bir özel çözümü \(y_1 = -2/x\)"</b> diyor! Bu ifade %100 <b>Riccati Denklemi</b> demektir.`,
    formulaUsed: R`y = y_1 + z = -\frac{2}{x} + z \implies y' = \frac{2}{x^2} + z' \quad (\text{Bernoulli'ye dönüşür})`,
    steps: [
      ["y = -2/x + z ve y' = 2/x² + z' ifadelerini denklemde yerine koy", R`\[\left(\frac{2}{x^2} + \frac{dz}{dx}\right) - \frac{3}{x}\left(-\frac{2}{x} + z\right) - \frac{4}{x^2} = \left(-\frac{2}{x} + z\right)^2\]\[\frac{2}{x^2} + \frac{dz}{dx} + \frac{6}{x^2} - \frac{3}{x}z - \frac{4}{x^2} = \frac{4}{x^2} - \frac{4}{x}z + z^2\]`],
      ["x²'li terimler birbirini götürür (Sağlama!), Bernoulli denklemi kalır", R`Sol ve sağdaki \(\frac{4}{x^2}\)'ler sadeleşir:\[\frac{dz}{dx} + \frac{1}{x}z = z^2 \quad (\text{Bernoulli, } n=2)\]`],
      ["t = z^{-1} ile Lineer denkleme çevir ve çöz", R`\(t = z^{-1} \implies \frac{dt}{dx} - \frac{1}{x}t = -1\). İntegral çarpanı \(\mu = \frac{1}{x}\):\[\frac{t}{x} = \int -\frac{1}{x}\,dx + c = c - \ln|x| \implies t = x(c - \ln|x|) \implies z = \frac{1}{x(c - \ln|x|)}\]En son \(y = -\frac{2}{x} + z\) yazılır:\[y = -\frac{2}{x} + \frac{1}{x(c - \ln|x|)}\]`]
    ],
    trap: R`Yerine koyduğunda \(z\)'siz terimler (\(\frac{2}{x^2} + \frac{6}{x^2} - \frac{4}{x^2} = \frac{4}{x^2}\)) karşılıklı birbirini götürmüyorsa türevde veya tam kare açılımında kesin hata yapmışsındır!`
  },
  {
    id: "p3-o14",
    pdf: "pdf3",
    topic: "Riccati Denklemi (Teorem 2: y = y₁ + 1/z ile Doğrudan Lineere İndirgeme)",
    badge: "6. Hafta · Örnek 14",
    q: R`\(\frac{dy}{dx} - 3y + e^x + e^{-x}y^2 = 0\) diferansiyel denkleminin bir özel çözümü \(y_1 = e^x\) olduğuna göre genel çözümünü \(y = y_1 + \frac{1}{z}\) dönüşümüyle bulunuz.`,
    howToSpot: R`Özel çözüm \(y_1 = e^x\) verilmiş! \(y = y_1 + \frac{1}{z}\) dönüşümü bizi Bernoulli ile uğraştırmadan <b>tek adımda Lineer Denkleme</b> götürür!`,
    formulaUsed: R`y = e^x + \frac{1}{z} \implies \frac{dy}{dx} = e^x - \frac{1}{z^2}\frac{dz}{dx}`,
    steps: [
      ["Dönüşümü denklemde yerine yaz", R`\[\left(e^x - \frac{1}{z^2}\frac{dz}{dx}\right) - 3\left(e^x + \frac{1}{z}\right) + e^x + e^{-x}\left(e^{2x} + \frac{2e^x}{z} + \frac{1}{z^2}\right) = 0\]`],
      ["Parantezleri aç ve sadeleştir", R`\[e^x - \frac{1}{z^2}\frac{dz}{dx} - 3e^x - \frac{3}{z} + e^x + e^x + \frac{2}{z} + \frac{e^{-x}}{z^2} = 0\]\(e^x - 3e^x + e^x + e^x = 0\) (gitti!) ve \(-\frac{3}{z} + \frac{2}{z} = -\frac{1}{z}\):\[-\frac{1}{z^2}\frac{dz}{dx} - \frac{1}{z} + \frac{e^{-x}}{z^2} = 0 \xrightarrow{\cdot (-z^2)} \frac{dz}{dx} + z = e^{-x}\]`],
      ["Lineer denklemi çöz ve y = e^x + 1/z yaz", R`\(\mu = e^{\int 1\,dx} = e^x \implies e^x \cdot z = \int e^x e^{-x}dx + c = x + c \implies z = e^{-x}(x+c)\).<br>Yerine koy:\[y = e^x + \frac{1}{e^{-x}(x+c)} = e^x + \frac{e^x}{x+c}\]`]
    ],
    trap: R`\(\left(\frac{1}{z}\right)' = -\frac{z'}{z^2}\) türevindeki <b>eksi işaretini</b> unutmak sınavdaki #1 hata sebebidir!`
  },
  {
    id: "p3-o15",
    pdf: "pdf3",
    topic: "Riccati Denklemi (2 Özel Çözüm Biliniyorsa)",
    badge: "6. Hafta · Örnek 15",
    q: R`\(y' - \frac{y^2}{x^3-x^2} + \frac{x-2}{x-x^2}y = 0\) diferansiyel denkleminin iki özel çözümü \(y_1 = x\) ve \(y_2 = x^2\) ise genel çözümünü bulunuz.`,
    howToSpot: R`Soruda <b>iki özel çözüm (\(y_1\) ve \(y_2\))</b> birden verilmiş! Dönüşüm yapmaya gerek yok, doğrudan 2 özel çözümlü Riccati formülünü yaz!`,
    formulaUsed: R`\frac{y - y_1}{y - y_2} = c\,e^{\int (y_1 - y_2)Q(x)\,dx} \quad (\text{Dikkat: } Q(x), \text{ sağdaki } y^2\text{'nin katsayısıdır!})`,
    steps: [
      ["Denklemi y' + P(x)y + R(x) = Q(x)y² biçimine getirip Q(x)'i oku", R`\[y' + \frac{x-2}{x-x^2}y = \frac{1}{x^3-x^2}y^2 \implies Q(x) = \frac{1}{x^3-x^2} = \frac{1}{x^2(x-1)}\]`],
      ["Formüldeki integrali hesapla", R`\[(y_1 - y_2)Q(x) = (x - x^2)\cdot\frac{1}{x^2(x-1)} = \frac{-x(x-1)}{x^2(x-1)} = -\frac{1}{x}\]\[e^{\int -\frac{1}{x}dx} = e^{-\ln x} = \frac{1}{x}\]`],
      ["Genel çözümü yaz", R`\[\frac{y - x}{y - x^2} = \frac{c}{x} \implies xy - x^2 = cy - cx^2 \implies y = \frac{(1-c)x^2}{x-c}\]`]
    ],
    trap: R`\(Q(x)\)'i okurken \(- \frac{y^2}{x^3-x^2}\) terimini <b>eşitliğin sağ tarafına</b> atıp işaretini artı yapmayı unutma! Formüldeki \(Q(x)\), \(y' = \dots + Q(x)y^2\) kalıbındaki katsayıdır.`
  },
  {
    id: "p3-o1617",
    pdf: "pdf3",
    topic: "Riccati Denklemi (3 Özel Çözüm Biliniyorsa & Denklem Kurma)",
    badge: "6. Hafta · Örnek 16 ve Örnek 17",
    q: R`1) (Örnek 16) \(y' + \frac{1}{x^2-1} = \frac{1}{x^2-1}y^2\) denkleminin 3 özel çözümü \(y_1 = x,\; y_2 = 1,\; y_3 = \frac{1}{x}\) ise genel çözümünü bulunuz.<br>2) (Örnek 17) Özel çözümleri \(y_1 = x,\; y_2 = 1,\; y_3 = \frac{1}{x}\) olan Riccati denklemini kurunuz.`,
    howToSpot: R`<b>3 özel çözüm (\(y_1, y_2, y_3\))</b> verildiğinde <b>hiç integral almadan</b> çapraz oran formülüyle genel çözüm bulunur!`,
    formulaUsed: R`\frac{y - y_1}{y - y_2}\cdot\frac{y_3 - y_2}{y_3 - y_1} = c`,
    steps: [
      ["Örnek 16: 3 Özel Çözüm Formülünde yerine koy", R`\[\frac{y - x}{y - 1}\cdot\frac{\frac{1}{x} - 1}{\frac{1}{x} - x} = c \implies \frac{y - x}{y - 1}\cdot\frac{1 - x}{1 - x^2} = c \implies \frac{y - x}{y - 1}\cdot\frac{1}{1 + x} = c\]Buradan \(\frac{y-x}{y-1} = c(x+1) \implies y = \frac{x - c(x+1)}{1 - c(x+1)}\).`],
      ["Örnek 17: 3 Özel Çözümden Riccati Denklemini Kurma", R`\(y' = P(x)y + Q(x)y^2 + R(x)\) denkleminde \(y_1=x,\; y_2=1,\; y_3=1/x\) yerine konur:\[\begin{cases}1 = Px + Qx^2 + R \\ 0 = P + Q + R \\ -\frac{1}{x^2} = \frac{P}{x} + \frac{Q}{x^2} + R\end{cases}\]Bu 3 denklemden \(P(x) = 0,\; Q(x) = \frac{1}{x^2-1},\; R(x) = -\frac{1}{x^2-1}\) bulunur:\[y' = \frac{1}{x^2-1}y^2 - \frac{1}{x^2-1}\]`]
    ],
    trap: R`3 özel çözüm verildiyse sakın integral çarpanı veya dönüşüm arama; \(\frac{y-y_1}{y-y_2}\cdot\frac{y_3-y_2}{y_3-y_1} = c\) formülü 15 saniyede sonucu verir!`
  },
  {
    id: "p3-o18a910",
    pdf: "pdf3",
    topic: "Riccati Denklemi (Örnek 18 & Alıştırma 9–10)",
    badge: "6. Hafta · Örnek 18 ve Alıştırma 9, 10",
    q: R`Slayttaki diğer Riccati sorularını çözünüz:<br>• Örnek 18: \(y'(1-\sin x\cos x) + y^2\cos x - y + \sin x = 0,\;\; y_1 = \cos x\)<br>• Alıştırma 9: \(y' = y^2 - \frac{2}{x^2},\;\; y_1 = \frac{1}{x}\)<br>• Alıştırma 10: \(y' + y^2 - (1+2e^x)y + e^{2x} = 0,\;\; y_1 = e^x\)`,
    howToSpot: R`Hepsinde \(y_1\) özel çözümü verilmiş! \(y = y_1 + \frac{1}{z} \implies y' = y_1' - \frac{z'}{z^2}\) dönüşümüyle doğrudan Lineer denkleme çevrilir.`,
    formulaUsed: R`y = y_1 + \frac{1}{z} \implies \text{Kısayol Lineer: } z' + (P(x) - 2Q(x)y_1)z = -Q(x)`,
    steps: [
      ["Alıştırma 9 Çözümü (7. Hafta Vize Hazırlık Soru 19–20!)", R`\(y = \frac{1}{x} + \frac{1}{z} \implies y' = -\frac{1}{x^2} - \frac{z'}{z^2}\) yerine konur:\[-\frac{1}{x^2} - \frac{z'}{z^2} = \left(\frac{1}{x} + \frac{1}{z}\right)^2 - \frac{2}{x^2} = \frac{1}{x^2} + \frac{2}{xz} + \frac{1}{z^2} - \frac{2}{x^2}\]\[-\frac{z'}{z^2} = \frac{2}{xz} + \frac{1}{z^2} \implies \frac{dz}{dx} + \frac{2}{x}z = -1\]\(\mu = x^2 \implies x^2z = \int -x^2dx + c = -\frac{x^3}{3} + c \implies z = -\frac{x}{3} + \frac{c}{x^2}\).<br>Genel çözüm: \(y = \frac{1}{x} + \frac{1}{-\frac{x}{3} + \frac{c}{x^2}} = \frac{1}{x} + \frac{3x^2}{c_1 - x^3}\).`],
      ["Alıştırma 10 Çözümü", R`\(y = e^x + \frac{1}{z} \implies y' = e^x - \frac{z'}{z^2}\) yerine konursa:\[e^x - \frac{z'}{z^2} + \left(e^{2x} + \frac{2e^x}{z} + \frac{1}{z^2}\right) - (1+2e^x)\left(e^x + \frac{1}{z}\right) + e^{2x} = 0\]Sadeleşince: \(-\frac{z'}{z^2} + \frac{1}{z^2} - \frac{1}{z} = 0 \implies \frac{dz}{dx} + z = 1\).<br>\(\mu = e^x \implies e^x z = e^x + c \implies z = 1 + ce^{-x} \implies y = e^x + \frac{1}{1+ce^{-x}}\).`],
      ["Örnek 18 Çözümü", R`\(y = \cos x + \frac{1}{z}\) yazılıp düzenlenirse:\[\frac{dz}{dx} + \frac{1 - 2\cos^2 x}{1 - \sin x\cos x}z = \frac{\cos x}{1 - \sin x\cos x}\]Paydanın türevi \((1-\sin x\cos x)' = -(\cos^2 x - \sin^2 x) = 1 - 2\cos^2 x\) olduğundan \(\mu = 1 - \sin x\cos x\) olur!\[z(1 - \sin x\cos x) = \int \cos x\,dx + c = \sin x + c \implies y = \cos x + \frac{1 - \sin x\cos x}{\sin x + c}\]`]
    ],
    trap: R`Alıştırma 9 (\(y' = y^2 - \frac{2}{x^2},\; y_1 = \frac{1}{x}\)) hocanın 7. Hafta Vize Hazırlık PDF'inde Soru 19 ve 20 olarak birebir çıktı!`
  }
];
