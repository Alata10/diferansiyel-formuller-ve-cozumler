// Prof. Dr. Gözde ÖZKAN TÜKEL - 7. Hafta Vize Hazırlık Soruları (23 Çoktan Seçmeli Soru ve Adım Adım Çözümleri)
const RQ = String.raw;

window.QUIZ7_BLOCKS = {
  1: { title: "A. Tanıma Soruları (Soru 1–4)", desc: "Mertebe, derece, lineerlik ve denklem tipi tanıma soruları." },
  5: { title: "B. Değişkenlerine Ayrılabilir Denklem (Soru 5)", desc: "Değişkenleri ayırıp doğrudan integral alma." },
  6: { title: "C. Homojen Hale Dönüştürülebilen Denklem (Soru 6–8)", desc: RQ`<b>Sorular 6–8 için ortak denklem:</b> \[(x + y - 3)\,dx + (x - y - 1)\,dy = 0\]` },
  9: { title: "D. Tam Diferansiyel ve İntegral Çarpanı (Soru 9–13)", desc: RQ`<b>Sorular 9–11 için ortak denklem:</b> \[(3x^2y + 2xy + y^3)\,dx + (x^2 + y^2)\,dy = 0\]` },
  12: { title: "D (Devam). Yalnız y'ye Bağlı İntegral Çarpanı (Soru 12–13)", desc: RQ`<b>Sorular 12–13 için ortak denklem:</b> \[y\,dx + (3x - y^3)\,dy = 0\]` },
  14: { title: "E. Lineer Diferansiyel Denklem (Soru 14–16)", desc: RQ`<b>Sorular 14–16 için ortak denklem:</b> \[x\frac{dy}{dx} + 2y = 4x^2 \quad (x > 0)\]` },
  17: { title: "F. Bernoulli Diferansiyel Denklemi (Soru 17–18)", desc: RQ`<b>Sorular 17–18 için ortak denklem:</b> \[\frac{dy}{dx} + \frac{y}{x} = xy^2 \quad (x > 0)\]` },
  19: { title: "G. Riccati Denklemi — y = y₁ + 1/z Yöntemi (Soru 19–20)", desc: RQ`<b>Sorular 19–20 için ortak denklem:</b> \[y' = y^2 - \frac{2}{x^2}, \quad \text{özel çözüm } y_1 = \frac{1}{x}\]` },
  21: { title: "H. Riccati Denklemi — y = y₁ + z Yöntemi (Soru 21–23)", desc: RQ`<b>Sorular 21–23 için ortak denklem:</b> \[y' = y^2 - \frac{y}{x} - \frac{1}{x^2}, \quad \text{özel çözüm } y_1 = \frac{1}{x}\]` }
};

window.QUIZ7_QUESTIONS = [
  {
    n: 1,
    topic: "A. Tanıma (Mertebe & Derece)",
    q: RQ`\(\left(\frac{d^3y}{dx^3}\right)^2 + x\frac{d^2y}{dx^2} - y = 0\) diferansiyel denkleminin mertebesi, derecesi ve lineerlik durumu aşağıdakilerden hangisidir?`,
    opts: [
      RQ`3. mertebe, 2. derece, lineer değil`,
      RQ`2. mertebe, 3. derece, lineer değil`,
      RQ`3. mertebe, 2. derece, lineer`,
      RQ`3. mertebe, 1. derece, lineer`,
      RQ`2. mertebe, 2. derece, lineer değil`
    ],
    ans: 0, // a
    formulaHint: RQ`<b>Mertebe</b> = En yüksek türev (\(\frac{d^3y}{dx^3} \to 3\)). <b>Derece</b> = En yüksek türevin kuvveti (\((\dots)^2 \to 2\)). Türevin karesi alındığı için <b>lineer değildir</b>.`,
    sol: RQ`En yüksek türev \(\frac{d^3y}{dx^3}\) olduğundan <b>3. mertebe</b>; bu türevin kuvveti \(2\) olduğundan <b>2. derece</b>; türevin kuvveti \(1\)'den farklı olduğu için <b>lineer değildir</b>.`
  },
  {
    n: 2,
    topic: "A. Tanıma (Lineer Denklem)",
    q: RQ`Aşağıdaki diferansiyel denklemlerden hangisi <b>birinci mertebeden lineer</b> bir diferansiyel denklemdir?`,
    opts: [
      RQ`\(y' + xy^2 = \sin x\)`,
      RQ`\(y\,y' + x = 0\)`,
      RQ`\(y' + \sin y = x\)`,
      RQ`\(y' + x^2y = \cos x\)`,
      RQ`\((y')^2 + y = x\)`
    ],
    ans: 3, // d
    formulaHint: RQ`Standart kalıp: \(y' + P(x)y = Q(x)\). \(y\) ve \(y'\)'nün üssü 1 olmalı, \(y\cdot y'\) çarpımı veya \(\sin y\) olmamalı!`,
    sol: RQ`\(y' + P(x)y = Q(x)\) biçiminde olan tek denklem \(y' + x^2y = \cos x\)'tir (\(P(x)=x^2,\; Q(x)=\cos x\)). Diğerlerinde \(y^2\), \(y\cdot y'\), \(\sin y\) ve \((y')^2\) lineerliği bozar.`
  },
  {
    n: 3,
    topic: "A. Tanıma (Bernoulli)",
    q: RQ`Aşağıdaki diferansiyel denklemlerden hangisi <b>Bernoulli</b> tipindedir?`,
    opts: [
      RQ`\(y' + xy = e^x\)`,
      RQ`\(y' + y = y^2 + x\)`,
      RQ`\(y' + xy = x^2y^3\)`,
      RQ`\(y'' + y' = y^2\)`,
      RQ`\(y' + \ln y = x\)`
    ],
    ans: 2, // c
    formulaHint: RQ`Bernoulli kalıbı: \(y' + P(x)y = Q(x)y^n\). Sağda sadece \(Q(x)y^n\) olmalı, yanında \(+ x\) gibi \(y\)'siz terim olmamalı (o zaman Riccati olur)!`,
    sol: RQ`\(y' + P(x)y = Q(x)y^n\) kalıbına uyan denklem \(y' + xy = x^2y^3\)'tür (\(n = 3\)). (a) lineer, (b) sağda \(+x\) olduğu için Riccati, (d) 2. mertebe, (e) \(\ln y\) içerir.`
  },
  {
    n: 4,
    topic: "A. Tanıma (Tam Diferansiyel)",
    q: RQ`Aşağıdaki diferansiyel denklemlerden hangisi <b>tam diferansiyel</b> denklemdir?`,
    opts: [
      RQ`\(y\,dx - x\,dy = 0\)`,
      RQ`\((x+y)\,dx + (x-y)\,dy = 0\)`,
      RQ`\((x^2+y)\,dx + x\,dy = 0\)`,
      RQ`\(2xy\,dx + (x^2-y)\,dy = 0\)`,
      RQ`\((2x+y)\,dx + (x-3y^2)\,dy = 0\)`
    ],
    ans: 4, // e
    formulaHint: RQ`Tamlık koşulu: \(\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}\). (Not: Hocanın slaytında e şıkkı işaretlenmiştir, ayrıca b ve d de \(M_y=N_x\) sağlar ama 5. hafta slaytındaki tanıma sorusundan birebir e şıkkı alınmıştır!)`,
    sol: RQ`\(M = 2x+y,\; N = x-3y^2\) için \(\frac{\partial M}{\partial y} = 1 = \frac{\partial N}{\partial x}\) olduğundan tam diferansiyeldir. (5. Hafta Bölüm 2 slayt 18'deki tanıma sorusunun aynısıdır).`
  },
  {
    n: 5,
    topic: "B. Değişkenlerine Ayrılabilir",
    q: RQ`\(\frac{dy}{dx} = \frac{x^2 + 1}{y}\) diferansiyel denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(y^2 = x^3 + x + c\)`,
      RQ`\(y^2 = \frac{x^3}{3} + x + c\)`,
      RQ`\(3y^2 = 2x^3 + 6x + c\)`,
      RQ`\(y = \frac{x^3}{3} + x + c\)`,
      RQ`\(2y^2 = x^3 + 3x + c\)`
    ],
    ans: 2, // c
    formulaHint: RQ`İçler dışlar çarpımı yap: \(y\,dy = (x^2+1)\,dx\), iki tarafın integralini al ve paydaları 6 ile eşitle!`,
    sol: RQ`\[y\,dy = (x^2+1)\,dx \implies \int y\,dy = \int (x^2+1)\,dx \implies \frac{y^2}{2} = \frac{x^3}{3} + x + c_1\]İki taraf \(6\) ile çarpılırsa: \(3y^2 = 2x^3 + 6x + c\).`
  },
  {
    n: 6,
    topic: "C. Homojene Dönüştürülebilen",
    q: RQ`\((x + y - 3)\,dx + (x - y - 1)\,dy = 0\) denklemini homojen hale getiren \(x = X + h,\; y = Y + k\) ötelemesinde \((h, k)\) çifti aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(h = 1,\; k = 2\)`,
      RQ`\(h = 2,\; k = 1\)`,
      RQ`\(h = -2,\; k = -1\)`,
      RQ`\(h = 3,\; k = 1\)`,
      RQ`\(h = 1,\; k = -2\)`
    ],
    ans: 1, // b
    formulaHint: RQ`Parantez içlerini sıfıra eşitle: \(h + k - 3 = 0\) ve \(h - k - 1 = 0\). Şıkları yerine koyarak 2 saniyede bulabilirsin!`,
    sol: RQ`\[\begin{cases}h + k - 3 = 0 \\ h - k - 1 = 0\end{cases}\]Taraf tarafa toplanırsa \(2h - 4 = 0 \implies h = 2\), yerine yazılırsa \(k = 1\) bulunur.`
  },
  {
    n: 7,
    topic: "C. Homojene Dönüştürülebilen",
    q: RQ`\((x + y - 3)\,dx + (x - y - 1)\,dy = 0\) denkleminde öteleme ve ardından \(Y = UX\) dönüşümü uygulandığında elde edilen değişkenlerine ayrılmış denklem aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(\frac{dX}{X} + \frac{U+1}{U^2+1}\,dU = 0\)`,
      RQ`\(\frac{dX}{X} + \frac{1-U}{U^2+2U-1}\,dU = 0\)`,
      RQ`\(\frac{dX}{X} + \frac{U-1}{U^2+2U+1}\,dU = 0\)`,
      RQ`\(\frac{dX}{X} + \frac{U-1}{U^2-2U-1}\,dU = 0\)`,
      RQ`\(\frac{dX}{X} - \frac{U+1}{U^2-2U-1}\,dU = 0\)`
    ],
    ans: 3, // d
    formulaHint: RQ`\((X+Y)dX + (X-Y)dY = 0\) denkleminde \(Y=UX,\; dY = U\,dX + X\,dU\) yaz!`,
    sol: RQ`Öteleme sonrası: \((X+Y)\,dX + (X-Y)\,dY = 0\). \(Y = UX,\; dY = U\,dX + X\,dU\) yazılıp \(X\)'e bölünürse:\[(1+U)\,dX + (1-U)(U\,dX + X\,dU) = 0 \implies (1 + 2U - U^2)\,dX + X(1-U)\,dU = 0\]\[-(U^2 - 2U - 1)\,dX + X(1-U)\,dU = 0 \implies \frac{dX}{X} + \frac{U-1}{U^2-2U-1}\,dU = 0\]`
  },
  {
    n: 8,
    topic: "C. Homojene Dönüştürülebilen",
    q: RQ`\((x + y - 3)\,dx + (x - y - 1)\,dy = 0\) diferansiyel denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\((y-1)^2 + 2(x-2)(y-1) - (x-2)^2 = c\)`,
      RQ`\((y+1)^2 - 2(x+2)(y+1) - (x+2)^2 = c\)`,
      RQ`\((y-1)^2 - 2(x-2)(y-1) - (x-2)^2 = c\)`,
      RQ`\((x-2)^2 + (y-1)^2 = c\)`,
      RQ`\(\ln[(x-2)^2 + (y-1)^2] = c\)`
    ],
    ans: 2, // c
    formulaHint: RQ`Soru 7'deki \(\frac{dX}{X} + \frac{U-1}{U^2-2U-1}dU = 0\) integralinden \(X^2(U^2-2U-1) = c \implies Y^2 - 2XY - X^2 = c\) çıkar, sonra \(X = x-2,\; Y = y-1\) yaz!`,
    sol: RQ`Paydanın türevi \(2(U-1)\) olduğundan:\[\ln|X| + \frac{1}{2}\ln|U^2-2U-1| = \ln c_1 \implies X^2(U^2-2U-1) = c \implies Y^2 - 2XY - X^2 = c\]\(X = x-2,\; Y = y-1\) geri yazılırsa: \((y-1)^2 - 2(x-2)(y-1) - (x-2)^2 = c\).`
  },
  {
    n: 9,
    topic: "D. Tam Diferansiyel & İntegral Çarpanı",
    q: RQ`\((3x^2y + 2xy + y^3)\,dx + (x^2 + y^2)\,dy = 0\) diferansiyel denkleminin integral çarpanı aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(\mu(x) = e^x\)`,
      RQ`\(\mu(x) = e^{3x}\)`,
      RQ`\(\mu(x) = e^{-3x}\)`,
      RQ`\(\mu(x) = x^3\)`,
      RQ`\(\mu(y) = e^{3y}\)`
    ],
    ans: 1, // b
    formulaHint: RQ`\(M_y = 3x^2 + 2x + 3y^2\) ve \(N_x = 2x\). Farkları \(M_y - N_x = 3x^2 + 3y^2 = 3(x^2+y^2) = 3N\)! O halde \(f(x) = \frac{M_y-N_x}{N} = 3 \implies \mu = e^{3x}\)!`,
    sol: RQ`\[\frac{\partial M}{\partial y} = 3x^2 + 2x + 3y^2, \quad \frac{\partial N}{\partial x} = 2x\]\[\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) = \frac{3x^2 + 3y^2}{x^2 + y^2} = 3 \implies \mu(x) = e^{\int 3\,dx} = e^{3x}\]`
  },
  {
    n: 10,
    topic: "D. Tam Diferansiyel & İntegral Çarpanı",
    q: RQ`\((3x^2y + 2xy + y^3)\,dx + (x^2 + y^2)\,dy = 0\) diferansiyel denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(e^{3x}(x^2y + y^3) = c\)`,
      RQ`\(e^{3x}(x^2 + y^2) = c\)`,
      RQ`\(e^{-3x}(3x^2y + y^3) = c\)`,
      RQ`\(e^{3x}\left(x^2y + \frac{y^3}{3}\right) + c = 0\)`,
      RQ`\(e^{3x}(3x^2y + y^3) = c\)`
    ],
    ans: 4, // e
    formulaHint: RQ`Denklemi \(e^{3x}\) ile çarpınca \(N_{\text{yeni}} = e^{3x}(x^2+y^2)\) olur; bunu doğrudan \(y\)'ye göre entegre et: \(e^{3x}(x^2y + \frac{y^3}{3}) = c_1\), sonra 3 ile çarp!`,
    sol: RQ`Denklem \(e^{3x}\) ile çarpılıp \(N_{\text{yeni}} = e^{3x}(x^2+y^2)\) üzerinden \(y\)'ye göre integral alınırsa:\[F(x,y) = \int e^{3x}(x^2+y^2)\,dy = e^{3x}\left(x^2y + \frac{y^3}{3}\right) = c_1\]İki taraf \(3\) ile çarpılırsa: \(e^{3x}(3x^2y + y^3) = c\). (d ve e eşdeğerdir; standart yazılım e'dir).`
  },
  {
    n: 11,
    topic: "D. Tam Diferansiyel (BDP)",
    q: RQ`\((3x^2y + 2xy + y^3)\,dx + (x^2 + y^2)\,dy = 0\) denkleminin \(y(0) = 3\) başlangıç koşulunu sağlayan özel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(e^{3x}(3x^2y + y^3) = 27\)`,
      RQ`\(e^{3x}(3x^2y + y^3) = 9\)`,
      RQ`\(e^{3x}(3x^2y + y^3) = 3\)`,
      RQ`\(e^{3x}(x^2y + y^3) = 27\)`,
      RQ`\(e^{3x}(3x^2y + y^3) = 0\)`
    ],
    ans: 0, // a
    formulaHint: RQ`Genel çözümde \(x = 0,\; y = 3\) koy: \(e^0(0 + 3^3) = 1 \cdot 27 = 27\)!`,
    sol: RQ`\(e^{3x}(3x^2y + y^3) = c\) genel çözümünde \(x=0,\; y=3\) yazılırsa:\[e^0(0 + 3^3) = c \implies c = 27 \implies e^{3x}(3x^2y + y^3) = 27\]`
  },
  {
    n: 12,
    topic: "D. İntegral Çarpanı μ(y)",
    q: RQ`\(y\,dx + (3x - y^3)\,dy = 0\) diferansiyel denkleminin yalnız \(y\)'ye bağlı integral çarpanı aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(\mu(y) = y\)`,
      RQ`\(\mu(y) = y^3\)`,
      RQ`\(\mu(y) = y^2\)`,
      RQ`\(\mu(y) = \frac{1}{y^2}\)`,
      RQ`\(\mu(y) = e^{2y}\)`
    ],
    ans: 2, // c
    formulaHint: RQ`\(y\)'ye bağlı \(\mu(y)\) formülü: \(g(y) = -\frac{M_y - N_x}{M} = \frac{N_x - M_y}{M}\). Burada \(M = y \implies M_y = 1\) ve \(N_x = 3\)!`,
    sol: RQ`\(M = y,\; N = 3x - y^3 \implies \frac{\partial M}{\partial y} = 1,\; \frac{\partial N}{\partial x} = 3\).\[g(y) = -\frac{1}{M}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) = -\frac{1 - 3}{y} = \frac{2}{y} \implies \mu(y) = e^{\int \frac{2}{y}dy} = y^2\]`
  },
  {
    n: 13,
    topic: "D. İntegral Çarpanı μ(y)",
    q: RQ`\(y\,dx + (3x - y^3)\,dy = 0\) diferansiyel denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(6xy^3 - y^6 = c\)`,
      RQ`\(xy^3 - y^6 = c\)`,
      RQ`\(3xy^2 - y^5 = c\)`,
      RQ`\(xy^2 - \frac{y^5}{5} = c\)`,
      RQ`\(6xy^3 + y^6 = c\)`
    ],
    ans: 0, // a
    formulaHint: RQ`Denklemi \(\mu = y^2\) ile çarp: \(y^3\,dx + (3xy^2 - y^5)\,dy = 0\). \(F = \int y^3\,dx + \int (-y^5)\,dy = xy^3 - \frac{y^6}{6} = c_1\), 6 ile çarp!`,
    sol: RQ`\(\mu = y^2\) ile çarpılırsa: \(y^3\,dx + (3xy^2 - y^5)\,dy = 0\).\[F(x,y) = \int y^3\,dx + \phi(y) = xy^3 + \phi(y)\]\[3xy^2 + \phi'(y) = 3xy^2 - y^5 \implies \phi(y) = -\frac{y^6}{6}\]Genel çözüm \(6\) ile çarpılırsa: \(6xy^3 - y^6 = c\).`
  },
  {
    n: 14,
    topic: "E. Lineer Denklem",
    q: RQ`\(x\frac{dy}{dx} + 2y = 4x^2 \;\;(x > 0)\) denklemi standart biçime getirildiğinde integral çarpanı \(\mu(x)\) aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(\mu(x) = e^{2x}\)`,
      RQ`\(\mu(x) = x^2\)`,
      RQ`\(\mu(x) = 2x\)`,
      RQ`\(\mu(x) = \frac{1}{x^2}\)`,
      RQ`\(\mu(x) = x\)`
    ],
    ans: 1, // b
    formulaHint: RQ`Önce \(x\)'e böl! \(\frac{dy}{dx} + \frac{2}{x}y = 4x \implies P(x) = \frac{2}{x} \implies \mu(x) = e^{\int \frac{2}{x}dx} = x^2\).`,
    sol: RQ`İki taraf \(x\)'e bölünürse standart biçim:\[\frac{dy}{dx} + \frac{2}{x}y = 4x \implies P(x) = \frac{2}{x} \implies \mu(x) = e^{\int \frac{2}{x}dx} = e^{2\ln x} = x^2\]`
  },
  {
    n: 15,
    topic: "E. Lineer Denklem",
    q: RQ`\(x\frac{dy}{dx} + 2y = 4x^2 \;\;(x > 0)\) diferansiyel denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(y = x^2 + cx\)`,
      RQ`\(y = 2x^2 + \frac{c}{x^2}\)`,
      RQ`\(y = x^4 + \frac{c}{x^2}\)`,
      RQ`\(y = x^2 + \frac{c}{x^2}\)`,
      RQ`\(y = 4x^2 + \frac{c}{x^2}\)`
    ],
    ans: 3, // d
    formulaHint: RQ`Formül: \(\mu \cdot y = \int \mu \cdot Q(x)\,dx + c \implies x^2 y = \int x^2 \cdot 4x\,dx + c = x^4 + c\)!`,
    sol: RQ`\(P(x) = \frac{2}{x},\; Q(x) = 4x,\; \mu(x) = x^2\) olduğundan:\[x^2 \cdot y = \int 4x \cdot x^2\,dx + c = \int 4x^3\,dx + c = x^4 + c \implies y = x^2 + \frac{c}{x^2}\]`
  },
  {
    n: 16,
    topic: "E. Lineer Denklem (BDP)",
    q: RQ`\(x\frac{dy}{dx} + 2y = 4x^2\) denkleminin \(y(1) = 2\) koşulunu sağlayan özel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(y = x^2 + \frac{1}{x^2}\)`,
      RQ`\(y = x^2 + \frac{2}{x^2}\)`,
      RQ`\(y = x^2 - \frac{1}{x^2}\)`,
      RQ`\(y = 2x^2\)`,
      RQ`\(y = x^2 + \frac{3}{x^2}\)`
    ],
    ans: 0, // a
    formulaHint: RQ`Şıklarda \(x = 1\) koyduğunda \(y = 2\) veren şıkkı bul veya \(y = x^2 + \frac{c}{x^2}\)'de \(x=1, y=2 \implies c=1\) yaz!`,
    sol: RQ`Genel çözüm \(y = x^2 + \frac{c}{x^2}\)'de \(x = 1,\; y = 2\) yazılırsa:\[2 = 1 + c \implies c = 1 \implies y = x^2 + \frac{1}{x^2}\]`
  },
  {
    n: 17,
    topic: "F. Bernoulli Denklemi",
    q: RQ`\(\frac{dy}{dx} + \frac{y}{x} = xy^2 \;\;(x > 0)\) Bernoulli denklemine \(z = y^{1-2} = y^{-1}\) dönüşümü uygulandığında elde edilen lineer denklem aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(\frac{dz}{dx} + \frac{z}{x} = x\)`,
      RQ`\(\frac{dz}{dx} - \frac{z}{x} = x\)`,
      RQ`\(\frac{dz}{dx} - \frac{z}{x} = -x\)`,
      RQ`\(\frac{dz}{dx} + \frac{z}{x} = -x\)`,
      RQ`\(\frac{dz}{dx} - \frac{2z}{x} = -x\)`
    ],
    ans: 2, // c
    formulaHint: RQ`Bernoulli kısayolu: \(\frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)\). Burada \(n=2 \implies 1-n = -1\) olduğundan hem \(P\) hem \(Q\) eksi ile çarpılır!`,
    sol: RQ`İki taraf \(y^2\)'ye bölünür: \(y^{-2}\frac{dy}{dx} + \frac{1}{x}y^{-1} = x\). \(z = y^{-1} \implies \frac{dz}{dx} = -y^{-2}\frac{dy}{dx}\) yazılırsa:\[-\frac{dz}{dx} + \frac{z}{x} = x \implies \frac{dz}{dx} - \frac{z}{x} = -x\]`
  },
  {
    n: 18,
    topic: "F. Bernoulli Denklemi",
    q: RQ`\(\frac{dy}{dx} + \frac{y}{x} = xy^2 \;\;(x > 0)\) diferansiyel denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(y = \frac{1}{x^2 + cx}\)`,
      RQ`\(y = \frac{x}{c - x^2}\)`,
      RQ`\(y = \frac{1}{x(x + c)}\)`,
      RQ`\(y = x(c - x)\)`,
      RQ`\(y = \frac{1}{x(c - x)}\)`
    ],
    ans: 4, // e
    formulaHint: RQ`\(\frac{dz}{dx} - \frac{1}{x}z = -x\) için \(\mu = \frac{1}{x} \implies \frac{z}{x} = \int -1\,dx + c = c - x \implies z = x(c-x) \implies y = \frac{1}{x(c-x)}\)!`,
    sol: RQ`\(\frac{dz}{dx} - \frac{z}{x} = -x\) için \(\mu(x) = e^{-\int \frac{1}{x}dx} = \frac{1}{x}\):\[\frac{z}{x} = \int -x \cdot \frac{1}{x}\,dx + c = c - x \implies z = x(c - x)\]Geri dönüşüm \(z = y^{-1}\): \(y = \frac{1}{x(c - x)}\).`
  },
  {
    n: 19,
    topic: "G. Riccati (y = y₁ + 1/z Yöntemi)",
    q: RQ`\(y' = y^2 - \frac{2}{x^2}\) Riccati denkleminin bir özel çözümü \(y_1 = \frac{1}{x}\)'tir. \(y = \frac{1}{x} + \frac{1}{z}\) dönüşümü uygulandığında elde edilen lineer denklem aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(\frac{dz}{dx} - \frac{2z}{x} = 1\)`,
      RQ`\(\frac{dz}{dx} + \frac{2z}{x} = 1\)`,
      RQ`\(\frac{dz}{dx} - \frac{2z}{x} = -1\)`,
      RQ`\(\frac{dz}{dx} + \frac{2z}{x} = -1\)`,
      RQ`\(\frac{dz}{dx} + \frac{z}{x} = -1\)`
    ],
    ans: 3, // d
    formulaHint: RQ`\(y = \frac{1}{x} + \frac{1}{z} \implies y' = -\frac{1}{x^2} - \frac{z'}{z^2}\) yaz, sağda tam kareyi aç: \(\frac{1}{x^2} + \frac{2}{xz} + \frac{1}{z^2} - \frac{2}{x^2}\)!`,
    sol: RQ`\(y = \frac{1}{x} + \frac{1}{z} \implies y' = -\frac{1}{x^2} - \frac{z'}{z^2}\) denklemde yerine yazılırsa:\[-\frac{1}{x^2} - \frac{z'}{z^2} = \frac{1}{x^2} + \frac{2}{xz} + \frac{1}{z^2} - \frac{2}{x^2} \implies -\frac{z'}{z^2} = \frac{2}{xz} + \frac{1}{z^2}\]İki taraf \(-z^2\) ile çarpılırsa:\[\frac{dz}{dx} + \frac{2z}{x} = -1\]`
  },
  {
    n: 20,
    topic: "G. Riccati (y = y₁ + 1/z Yöntemi)",
    q: RQ`\(y' = y^2 - \frac{2}{x^2} \;\;(y_1 = \frac{1}{x})\) Riccati denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(y = \frac{1}{x} + \frac{x^2}{c - x^3}\)`,
      RQ`\(y = \frac{1}{x} + \frac{3x^2}{c - x^3}\)`,
      RQ`\(y = \frac{1}{x} + \frac{3}{c - x^3}\)`,
      RQ`\(y = \frac{1}{x} - \frac{3x^2}{c + x^3}\)`,
      RQ`\(y = \frac{1}{x} + \frac{x^3}{c - 3x^2}\)`
    ],
    ans: 1, // b
    formulaHint: RQ`\(\frac{dz}{dx} + \frac{2}{x}z = -1\) için \(\mu = x^2 \implies x^2z = -\frac{x^3}{3} + c_1 \implies z = \frac{c - x^3}{3x^2}\), ters çevirip \(\frac{1}{x}\)'e ekle!`,
    sol: RQ`\(\frac{dz}{dx} + \frac{2}{x}z = -1\) için \(\mu(x) = x^2\):\[x^2 z = \int -x^2\,dx + c_1 = -\frac{x^3}{3} + c_1 \implies z = \frac{c - x^3}{3x^2}\]Buradan \(y = \frac{1}{x} + \frac{1}{z} = \frac{1}{x} + \frac{3x^2}{c - x^3}\).`
  },
  {
    n: 21,
    topic: "H. Riccati (y = y₁ + z Yöntemi)",
    q: RQ`\(y' = y^2 - \frac{y}{x} - \frac{1}{x^2}\) Riccati denkleminin bir özel çözümü \(y_1 = \frac{1}{x}\)'tir. \(y = \frac{1}{x} + z\) dönüşümü uygulandığında elde edilen <b>Bernoulli</b> denklemi aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(z' + \frac{z}{x} = z^2\)`,
      RQ`\(z' - \frac{2z}{x} = z^2\)`,
      RQ`\(z' + \frac{2z}{x} = z^2\)`,
      RQ`\(z' - \frac{z}{x} = z^2\)`,
      RQ`\(z' - \frac{z}{x} = -z^2\)`
    ],
    ans: 3, // d
    formulaHint: RQ`\(y = \frac{1}{x} + z \implies y' = -\frac{1}{x^2} + z'\) denklemde yerine koy! Sağda \(\frac{2z}{x} - \frac{z}{x} = \frac{z}{x}\) kalır, sola atınca \(-\frac{z}{x}\) olur!`,
    sol: RQ`\(y = \frac{1}{x} + z \implies y' = -\frac{1}{x^2} + z'\) yerine konursa:\[-\frac{1}{x^2} + z' = \left(\frac{1}{x^2} + \frac{2z}{x} + z^2\right) - \left(\frac{1}{x^2} + \frac{z}{x}\right) - \frac{1}{x^2}\]\[z' = \frac{z}{x} + z^2 \implies z' - \frac{z}{x} = z^2\]`
  },
  {
    n: 22,
    topic: "H. Riccati (y = y₁ + z Yöntemi)",
    q: RQ`Soru 21'de elde edilen \(z' - \frac{z}{x} = z^2\) Bernoulli denklemine \(u = z^{-1} = \frac{1}{z}\) dönüşümü uygulandığında elde edilen <b>lineer</b> denklem aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(u' - \frac{u}{x} = -1\)`,
      RQ`\(u' + \frac{u}{x} = -1\)`,
      RQ`\(u' + \frac{u}{x} = 1\)`,
      RQ`\(u' - \frac{u}{x} = 1\)`,
      RQ`\(u' + \frac{2u}{x} = -1\)`
    ],
    ans: 1, // b
    formulaHint: RQ`\(z' - \frac{z}{x} = z^2\) denkleminde \(n=2 \implies 1-n = -1\) ile katsayıları çarp: \(u' + \frac{u}{x} = -1\)!`,
    sol: RQ`\(z^{-2}z' - \frac{1}{x}z^{-1} = 1\) denkleminde \(u = z^{-1} \implies u' = -z^{-2}z'\) yazılırsa:\[-u' - \frac{u}{x} = 1 \implies u' + \frac{u}{x} = -1\]`
  },
  {
    n: 23,
    topic: "H. Riccati (y = y₁ + z Yöntemi)",
    q: RQ`\(y' = y^2 - \frac{y}{x} - \frac{1}{x^2} \;\;(y_1 = \frac{1}{x})\) Riccati denkleminin genel çözümü aşağıdakilerden hangisidir?`,
    opts: [
      RQ`\(y = \frac{1}{x} + \frac{x}{c - x^2}\)`,
      RQ`\(y = \frac{1}{x} + \frac{2}{c - x^2}\)`,
      RQ`\(y = \frac{1}{x} - \frac{2x}{c + x^2}\)`,
      RQ`\(y = \frac{1}{x} + \frac{x^2}{c - 2x}\)`,
      RQ`\(y = \frac{1}{x} + \frac{2x}{c - x^2}\)`
    ],
    ans: 4, // e
    formulaHint: RQ`\(u' + \frac{u}{x} = -1\) için \(\mu = x \implies xu = -\frac{x^2}{2} + c_1 \implies u = \frac{c - x^2}{2x} \implies z = \frac{2x}{c - x^2}\)!`,
    sol: RQ`\(u' + \frac{u}{x} = -1\) için \(\mu(x) = x\):\[x \cdot u = \int -x\,dx + c_1 = -\frac{x^2}{2} + c_1 \implies u = \frac{c - x^2}{2x}\]Buradan \(z = \frac{1}{u} = \frac{2x}{c - x^2}\) ve genel çözüm:\[y = \frac{1}{x} + z = \frac{1}{x} + \frac{2x}{c - x^2}\]`
  }
];
