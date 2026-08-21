'use client';

import { useEffect, useRef } from 'react';

export default function TechCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const dataMetrics = [
      'CPF VALIDADO',
      'SCORE: 890',
      'RISCO: BAIXO',
      'CNPJ REGULAR',
      'PEFIN CLEAR',
      'SERASA SYNC',
      'FRAUDE: 0%',
      'CREDNET OK',
      'INFOBUSCA',
    ];

    const mouse = {
      x: null,
      y: null,
      radius: 170,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Aumentamos levemente para 60 partículas
    const particleCount = 60;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 0.8 + 1.2,
      tag: dataMetrics[Math.floor(Math.random() * dataMetrics.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Definição da área cega do Título (Centro superior)
      const titleAvoidZone = {
        minX: canvas.width * 0.2,  // 20% da largura
        maxX: canvas.width * 0.8,  // 80% da largura
        minY: 0,                   // Topo da seção
        maxY: 200,                 // Até 200px de altura (cobre badge, título e subtítulo)
      };

      // 1. REPULSÃO ENTRE PARTÍCULAS E DA ÁREA DO TÍTULO
      for (let i = 0; i < particles.length; i++) {
        // Empurra a partícula se ela entrar na área do título
        if (
          particles[i].x > titleAvoidZone.minX &&
          particles[i].x < titleAvoidZone.maxX &&
          particles[i].y > titleAvoidZone.minY &&
          particles[i].y < titleAvoidZone.maxY
        ) {
          particles[i].vy = Math.abs(particles[i].vy); // Força a descer
          if (particles[i].x < canvas.width / 2) {
            particles[i].vx = -Math.abs(particles[i].vx); // Empurra pra esquerda
          } else {
            particles[i].vx = Math.abs(particles[i].vx); // Empurra pra direita
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = 32;

          if (dist < minDist && dist > 0) {
            const overlap = (minDist - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;

            particles[i].x -= nx * overlap * 0.5;
            particles[i].y -= ny * overlap * 0.5;
            particles[j].x += nx * overlap * 0.5;
            particles[j].y += ny * overlap * 0.5;
          }

          // Linhas finas azuis conectando os nós de fundo
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const alpha = (1 - dist / 125) * 0.35;
            ctx.strokeStyle = `rgba(42, 85, 149, ${alpha})`; 
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // 2. ATRAÇÃO MAGNÉTICA DO MOUSE + SELEÇÃO DA PARTÍCULA MAIS PRÓXIMA
      let closestParticle = null;
      let minMouseDist = Infinity;

      if (mouse.x !== null && mouse.y !== null) {
        particles.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            if (dist < minMouseDist) {
              minMouseDist = dist;
              closestParticle = p;
            }

            // Conexão rosa
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = (1 - dist / mouse.radius) * 0.6;
            ctx.strokeStyle = `rgba(232, 0, 112, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Atração do ímã
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 1.6;
            p.y += Math.sin(angle) * force * 1.6;
          }
        });

        // Desenha o texto apenas da partícula mais próxima do mouse
        if (closestParticle) {
          const alpha = (1 - minMouseDist / mouse.radius) * 0.9;
          ctx.font = '600 11px monospace';
          ctx.fillStyle = `rgba(232, 0, 112, ${alpha})`;
          ctx.fillText(closestParticle.tag, closestParticle.x + 8, closestParticle.y - 4);
        }
      }

      // 3. RENDERIZAÇÃO DAS BOLINHAS
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#E80070';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
}