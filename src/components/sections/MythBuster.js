"use client";

import "./MythBuster.css";

export default function MythBuster() {
  return (
    <section className="myth-buster" id="myth-buster">
      <div className="myth-heading">
        <span className="myth-eyebrow">РАЗРУШИТЕЛЬ МИФОВ</span>
        <h2>
          Мифы и <span className="text-accent">правда</span> <br />
          о работе в IT
        </h2>
        <p>
          Наведи курсор на любую из сторон, чтобы увидеть, что скрывается за 
          популярными стереотипами о профессии.
        </p>
      </div>

      <div className="myth-split">
        {/* ===== ЛЕВАЯ ЧАСТЬ: МИФ ===== */}
        <div className="myth-side myth-side--myth">
          <div className="myth-bg-pattern"></div>
          <div className="myth-ambient myth-ambient--red"></div>
          
          <div className="myth-deco-elements">
            <div className="deco-line deco-line-1"></div>
            <div className="deco-line deco-line-2"></div>
            <div className="deco-line deco-line-3"></div>
            <div className="deco-line deco-line-4"></div>
            <div className="deco-dot deco-dot-1"></div>
            <div className="deco-dot deco-dot-2"></div>
            <div className="deco-dot deco-dot-3"></div>
            <div className="deco-circle deco-circle-1"></div>
            <div className="deco-circle deco-circle-2"></div>
          </div>

          <div className="myth-cover myth-cover--myth">
            <span className="cover-text">МИФ</span>
            <span className="cover-hint">Наведи, чтобы разоблачить</span>
          </div>

          <div className="myth-content">
            <div className="myth-interactive myth-interactive--left">
              <div className="gif-glow"></div>
              
              <div className="gif-frame">
                <img src="/Navigator.github.io/images/meme/chips.gif" alt="Мужчина ест чипсы" className="myth-gif" />
              </div>

              <div className="thought-bubble">
                <span className="thought-bubble-label">В голове у новичка</span>
                <div className="thought-carousel">
                  <p className="thought-item">1С — это легко!</p>
                  <p className="thought-item">Там уметь-то нечего</p>
                  <p className="thought-item">Это даже не программирование</p>
                  <p className="thought-item">Всё по-русски написано</p>
                  <p className="thought-item">Разберусь за два дня!</p>
                </div>
              </div>

              <div className="myth-insight myth-insight--myth">
                <span className="insight-badge">МИФ</span>
                <p>Многие ошибочно полагают, что работа с программами фирмы 1С — это просто «нажатие кнопок» на русском языке. Это скучно, и работа сводится к монотонному выполнению одних и тех же операций.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ПРАВАЯ ЧАСТЬ: ПРАВДА ===== */}
        <div className="myth-side myth-side--truth">
          <div className="myth-bg-pattern"></div>
          <div className="myth-ambient myth-ambient--yellow"></div>

          <div className="myth-cover myth-cover--truth">
            <span className="cover-text">ПРАВДА</span>
            <span className="cover-hint">Наведи, чтобы узнать</span>
          </div>

          <div className="myth-content">
            <div className="myth-interactive myth-interactive--right">
              
              {/* Иконки с текстом */}
              <div className="float-tag tag-1"><img src="/Navigator.github.io/icons/ERP.png" alt="ERP" /><span>ERP</span></div>
              <div className="float-tag tag-2"><img src="/Navigator.github.io/icons/buhgalteriya.png" alt="Бухгалтерия" /><span>Бухгалтерия</span></div>
              <div className="float-tag tag-3"><img src="/Navigator.github.io/icons/torg.png" alt="Торговля" /><span>Торговля</span></div>
              <div className="float-tag tag-4"><img src="/Navigator.github.io/icons/salary.png" alt="Зарплата" /><span>Зарплата</span></div>
              <div className="float-tag tag-5"><img src="/Navigator.github.io/icons/arch.png" alt="Архив" /><span>Архив</span></div>
              <div className="float-tag tag-6"><img src="/Navigator.github.io/icons/ERP.png" alt="УНФ" /><span>УНФ</span></div>
              <div className="float-tag tag-7"><img src="/Navigator.github.io/icons/dev.svg" alt="Разработка" /><span>Разработка</span></div>
              <div className="float-tag tag-8"><img src="/Navigator.github.io/icons/support.svg" alt="Поддержка" /><span>Поддержка</span></div>

              {/* Кошки */}
              <img src="/Navigator.github.io/images/meme/catlaught.jpg" alt="Кошка" className="truth-cat cat-1" />
              <img src="/Navigator.github.io/images/meme/catlaught.jpg" alt="Кошка" className="truth-cat cat-2" />
              <img src="/Navigator.github.io/images/meme/catlaught.jpg" alt="Кошка" className="truth-cat cat-3" />
              <img src="/Navigator.github.io/images/meme/catlaught.jpg" alt="Кошка" className="truth-cat cat-4" />
              <img src="/Navigator.github.io/images/meme/catlaught.jpg" alt="Кошка" className="truth-cat cat-5" />
              <img src="/Navigator.github.io/images/meme/catlaught.jpg" alt="Кошка" className="truth-cat cat-6" />
              <img src="/Navigator.github.io/images/meme/catlaught.jpg" alt="Кошка" className="truth-cat cat-7" />

              {/* Солдат */}
              <img src="/Navigator.github.io/images/meme/War-meme.png" alt="Солдат" className="truth-soldier" />

              {/* Облачко с точками */}
              <div className="speech-bubble">
                <div className="speech-bubble-inner"><span></span><span></span><span></span></div>
              </div>

              <div className="myth-insight myth-insight--truth">
                <span className="insight-badge">Правда</span>
                <p>Специалист по 1С — это не просто пользователь, а инженер, который настраивает бизнес-процессы, пишет код и интегрирует системы различных программных решений на платформе 1С:Предприятие.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
