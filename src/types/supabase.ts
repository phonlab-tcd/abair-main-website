export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      ab_publications: {
        Row: {
          abstract: string
          created_at: string | null
          id: number
          pdf_url: string
          publication: string
          publication_category: string
          title: string
          year_published: number
        }
        Insert: {
          abstract: string
          created_at?: string | null
          id?: number
          pdf_url: string
          publication: string
          publication_category: string
          title: string
          year_published: number
        }
        Update: {
          abstract?: string
          created_at?: string | null
          id?: number
          pdf_url?: string
          publication?: string
          publication_category?: string
          title?: string
          year_published?: number
        }
        Relationships: []
      }
      application_categories: {
        Row: {
          created_at: string | null
          id: number
          name_en: string | null
          name_ga: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name_en?: string | null
          name_ga?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name_en?: string | null
          name_ga?: string | null
        }
        Relationships: []
      }
      applications: {
        Row: {
          category: number
          created_at: string
          description_en: string
          description_ga: string
          id: number
          image: string
          name: string
          url: string
        }
        Insert: {
          category: number
          created_at?: string
          description_en: string
          description_ga: string
          id?: number
          image: string
          name: string
          url: string
        }
        Update: {
          category?: number
          created_at?: string
          description_en?: string
          description_ga?: string
          id?: number
          image?: string
          name?: string
          url?: string
        }
        Relationships: []
      }
      authors: {
        Row: {
          ab_publication_id: number
          person_id: number
        }
        Insert: {
          ab_publication_id: number
          person_id: number
        }
        Update: {
          ab_publication_id?: number
          person_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "authors_ab_publication_id_fkey"
            columns: ["ab_publication_id"]
            referencedRelation: "ab_publications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "authors_person_id_fkey"
            columns: ["person_id"]
            referencedRelation: "people"
            referencedColumns: ["id"]
          }
        ]
      }
      bat_adjacency_pairs: {
        Row: {
          chat_id: number
          correct: boolean | null
          created_at: string | null
          error_data: Json | null
          hints: Json | null
          id: number
          question_id: number
          response: Json | null
          retry_attempt: number
          text: string | null
          user_id: string | null
          verb_tense_form_info: string
        }
        Insert: {
          chat_id: number
          correct?: boolean | null
          created_at?: string | null
          error_data?: Json | null
          hints?: Json | null
          id?: number
          question_id: number
          response?: Json | null
          retry_attempt?: number
          text?: string | null
          user_id?: string | null
          verb_tense_form_info: string
        }
        Update: {
          chat_id?: number
          correct?: boolean | null
          created_at?: string | null
          error_data?: Json | null
          hints?: Json | null
          id?: number
          question_id?: number
          response?: Json | null
          retry_attempt?: number
          text?: string | null
          user_id?: string | null
          verb_tense_form_info?: string
        }
        Relationships: [
          {
            foreignKeyName: "bat_adjacency_pairs_chat_id_fkey"
            columns: ["chat_id"]
            referencedRelation: "bat_chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bat_adjacency_pairs_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "bat_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bat_adjacency_pairs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      bat_chats: {
        Row: {
          complete: boolean
          created_at: string
          form: string | null
          id: number
          intro: Json | null
          outro: Json | null
          points: number | null
          questions: Json
          tense: string | null
          user_id: string | null
          verb: string | null
        }
        Insert: {
          complete?: boolean
          created_at?: string
          form?: string | null
          id?: number
          intro?: Json | null
          outro?: Json | null
          points?: number | null
          questions?: Json
          tense?: string | null
          user_id?: string | null
          verb?: string | null
        }
        Update: {
          complete?: boolean
          created_at?: string
          form?: string | null
          id?: number
          intro?: Json | null
          outro?: Json | null
          points?: number | null
          questions?: Json
          tense?: string | null
          user_id?: string | null
          verb?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bat_chats_form_fkey"
            columns: ["form"]
            referencedRelation: "bat_forms"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "bat_chats_tense_fkey"
            columns: ["tense"]
            referencedRelation: "bat_tenses"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "bat_chats_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bat_chats_verb_fkey"
            columns: ["verb"]
            referencedRelation: "bat_verbs"
            referencedColumns: ["name"]
          }
        ]
      }
      bat_forms: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      bat_questions: {
        Row: {
          answer: string
          created_at: string
          form_id: number
          hints: Json
          id: number
          tense_id: number
          text: string
          verb_id: number
        }
        Insert: {
          answer: string
          created_at?: string
          form_id: number
          hints: Json
          id?: number
          tense_id: number
          text: string
          verb_id: number
        }
        Update: {
          answer?: string
          created_at?: string
          form_id?: number
          hints?: Json
          id?: number
          tense_id?: number
          text?: string
          verb_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "bat_questions_form_id_fkey"
            columns: ["form_id"]
            referencedRelation: "bat_forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bat_questions_tense_id_fkey"
            columns: ["tense_id"]
            referencedRelation: "bat_tenses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bat_questions_verb_id_fkey"
            columns: ["verb_id"]
            referencedRelation: "bat_verbs"
            referencedColumns: ["id"]
          }
        ]
      }
      bat_tenses: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      bat_verbs: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      dialects: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      genders: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      neartu_interest: {
        Row: {
          areas_of_interest: string | null
          consent: boolean | null
          created_at: string | null
          email: string | null
          id: number
          name: string | null
          other_info: string | null
        }
        Insert: {
          areas_of_interest?: string | null
          consent?: boolean | null
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          other_info?: string | null
        }
        Update: {
          areas_of_interest?: string | null
          consent?: boolean | null
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          other_info?: string | null
        }
        Relationships: []
      }
      news_categories: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      news_stories: {
        Row: {
          blurb_en: string
          blurb_ga: string
          body_en: string
          body_ga: string
          created_at: string | null
          date: string
          id: number
          images: Json
          news_category: string
          title_en: string
          title_ga: string
          video: string | null
        }
        Insert: {
          blurb_en?: string
          blurb_ga: string
          body_en?: string
          body_ga: string
          created_at?: string | null
          date: string
          id?: number
          images?: Json
          news_category: string
          title_en?: string
          title_ga: string
          video?: string | null
        }
        Update: {
          blurb_en?: string
          blurb_ga?: string
          body_en?: string
          body_ga?: string
          created_at?: string | null
          date?: string
          id?: number
          images?: Json
          news_category?: string
          title_en?: string
          title_ga?: string
          video?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_stories_news_category_fkey"
            columns: ["news_category"]
            referencedRelation: "news_categories"
            referencedColumns: ["name"]
          }
        ]
      }
      people: {
        Row: {
          bio: string
          created_at: string | null
          id: number
          image: string
          name: string
          role: string
        }
        Insert: {
          bio: string
          created_at?: string | null
          id?: number
          image: string
          name: string
          role: string
        }
        Update: {
          bio?: string
          created_at?: string | null
          id?: number
          image?: string
          name?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "people_role_fkey"
            columns: ["role"]
            referencedRelation: "roles"
            referencedColumns: ["name"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar: string | null
          dialect: number | null
          gender: number | null
          id: string
          language_preference: string
          over_16: boolean | null
          parent_caregiver_email: string | null
          parent_caregiver_name: string | null
          updated_at: string | null
          username: string | null
          year: number | null
        }
        Insert: {
          avatar?: string | null
          dialect?: number | null
          gender?: number | null
          id: string
          language_preference?: string
          over_16?: boolean | null
          parent_caregiver_email?: string | null
          parent_caregiver_name?: string | null
          updated_at?: string | null
          username?: string | null
          year?: number | null
        }
        Update: {
          avatar?: string | null
          dialect?: number | null
          gender?: number | null
          id?: string
          language_preference?: string
          over_16?: boolean | null
          parent_caregiver_email?: string | null
          parent_caregiver_name?: string | null
          updated_at?: string | null
          username?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_dialect_fkey"
            columns: ["dialect"]
            referencedRelation: "dialects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_gender_fkey"
            columns: ["gender"]
            referencedRelation: "genders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      publication_categories: {
        Row: {
          category: string | null
          id: number
        }
        Insert: {
          category?: string | null
          id?: number
        }
        Update: {
          category?: string | null
          id?: number
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      synthesis_requests: {
        Row: {
          created_at: string | null
          duration: number | null
          id: number
          session_ID: string | null
          text: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          duration?: number | null
          id?: number
          session_ID?: string | null
          text: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          duration?: number | null
          id?: number
          session_ID?: string | null
          text?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "synthesis_requests_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transcriptions: {
        Row: {
          audio_file_path: string | null
          correct: boolean | null
          corrected: boolean
          correction: string
          created_at: string | null
          duration: number | null
          id: number
          recognition_response: Json | null
          session_ID: string | null
          user_id: string | null
        }
        Insert: {
          audio_file_path?: string | null
          correct?: boolean | null
          corrected?: boolean
          correction?: string
          created_at?: string | null
          duration?: number | null
          id?: number
          recognition_response?: Json | null
          session_ID?: string | null
          user_id?: string | null
        }
        Update: {
          audio_file_path?: string | null
          correct?: boolean | null
          corrected?: boolean
          correction?: string
          created_at?: string | null
          duration?: number | null
          id?: number
          recognition_response?: Json | null
          session_ID?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transcriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      getallchatpoints: {
        Args: {
          u_id: string
        }
        Returns: number[]
      }
      getforms: {
        Args: Record<PropertyKey, never>
        Returns: number[]
      }
      getformsfromtense: {
        Args: {
          t_id: number
        }
        Returns: number[]
      }
      getformsfromverb: {
        Args: {
          v_id: number
        }
        Returns: number[]
      }
      getformsfromverbandtense: {
        Args: {
          v_id: number
          t_id: number
        }
        Returns: number[]
      }
      gethint: {
        Args: {
          v_id: number
          t_id: number
          f_id: number
        }
        Returns: string[]
      }
      gethinteasy: {
        Args: {
          v_id: number
          t_id: number
          f_id: number
        }
        Returns: string[]
      }
      gethinthard:
        | {
            Args: {
              v_id: number
              t_id: number
            }
            Returns: string[]
          }
        | {
            Args: {
              v_id: number
            }
            Returns: string[]
          }
      gethintmedium:
        | {
            Args: {
              v_id: number
              t_id: number
            }
            Returns: string[]
          }
        | {
            Args: {
              v_id: number
            }
            Returns: string[]
          }
      gettenses: {
        Args: Record<PropertyKey, never>
        Returns: number[]
      }
      gettensesfromform: {
        Args: {
          f_id: number
        }
        Returns: number[]
      }
      gettensesfromverb: {
        Args: {
          v_id: number
        }
        Returns: number[]
      }
      gettensesfromverbandform: {
        Args: {
          v_id: number
          f_id: number
        }
        Returns: number[]
      }
      getverbs: {
        Args: Record<PropertyKey, never>
        Returns: number[]
      }
      getverbsfromform: {
        Args: {
          f_id: number
        }
        Returns: number[]
      }
      getverbsfromtense: {
        Args: {
          t_id: number
        }
        Returns: number[]
      }
      getverbsfromtenseandform: {
        Args: {
          t_id: number
          f_id: number
        }
        Returns: number[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
