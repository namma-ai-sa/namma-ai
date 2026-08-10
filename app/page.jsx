"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function HomePage() {

  const router = useRouter();

  const [prompt,setPrompt] =
    useState("");

  const apps = [
    {
      icon:"📊",
      title:"CRM",
      path:"/crm"
    },
    {
      icon:"🤖",
      title:"AI Seller",
      path:"/ai-seller"
    },
    {
      icon:"📱",
      title:"WhatsApp Agent",
      path:"/whatsapp-agent"
    },
    {
      icon:"⚡",
      title:"Admin",
      path:"/admin"
    },
    {
      icon:"📝",
      title:"Article",
      path:"/tools/article"
    },
    {
      icon:"📈",
      title:"SEO",
      path:"/tools/seo"
    },
    {
      icon:"🎨",
      title:"Image",
      path:"/tools/image"
    },
    {
      icon:"🎥",
      title:"Video",
      path:"/tools/video"
    }
  ];

  function handleSubmit() {

    if(!prompt.trim()){
      return;
    }

    router.push(
      `/ai?q=${encodeURIComponent(prompt)}`
    );
  }

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth:"1200px",
          margin:"0 auto",
          padding:"40px 20px"
        }}
      >

        <div
          style={{
            textAlign:"center",
            marginBottom:"50px"
          }}
        >

          <h1
            style={{
              fontSize:"60px",
              marginBottom:"20px"
            }}
          >
            🚀 NAMMA AI
          </h1>

          <p
            style={{
              color:"#cbd5e1",
              maxWidth:"700px",
              margin:"0 auto"
            }}
          >
            منصة ذكاء أعمال ومبيعات وتسويق
            متكاملة تجمع CRM و AI Seller
            و WhatsApp Agent في مكان واحد.
          </p>

        </div>

        <div
          style={{
            display:"flex",
            gap:"10px",
            marginBottom:"40px"
          }}
        >

          <input
            value={prompt}
            onChange={(e)=>
              setPrompt(
                e.target.value
              )
            }
            placeholder="اكتب طلبك..."
            style={{
              flex:1
            }}
          />

          <button
            onClick={handleSubmit}
          >
            إرسال
          </button>

        </div>

        <h2
          style={{
            marginBottom:"20px"
          }}
        >
          ⚡ التطبيقات
        </h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap:"20px"
          }}
        >

          {apps.map((app)=>(
            <div
              key={app.path}
              className="card"
              style={{
                cursor:"pointer",
                textAlign:"center"
              }}
              onClick={()=>
                router.push(
                  app.path
                )
              }
            >

              <div
                style={{
                  fontSize:"44px"
                }}
              >
                {app.icon}
              </div>

              <h3>
                {app.title}
              </h3>

            </div>
          ))}

        </div>

      </main>
    </>
  );
}
