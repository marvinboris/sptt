export default interface ContentType {
  cms: {
    [key: string]: any;
    global: {
      [key: string]: string;
      app_name: string;
      company_name: string;
      company_logo: string;
      favicon: string;
      logo: { big?: string; dark?: string; default: string; light?: string };
      contact: {
        social_networks: { [key: string]: string };
        email: string;
        phone: string;
        map: string;
      };
    };
    general: {
      date: string;
      time: string;
      home: string;
      days: string[];
      months: string[];
    };
    auth: {
      footer: { copyrights: string; all_rights: string };
      messages: {
        admin: { not_found: string; invalid: string; sent: string };
        user: {
          inactive: string;
          unauthorized: string;
          sent: string;
          reset: string;
          failure: string;
        };
      };
      pages: {
        user: {
          login: {
            title: string;
            sign_in: string;
            email_address: string;
            password: string;
          };
        };
        admin: {
          login: {
            sign_in_to: string;
            sign_in: string;
            admin_panel: string;
            email_address: string;
            password: string;
            sms: string;
            email: string;
            otp_method: string;
          };
          verify: {
            enter: string;
            verification_code: string;
            continue: string;
            didnt_receive_code: string;
            resend: string;
          };
        };
      };
    };
    backend: {
      header: {
        id: string;
        sign_out: string;
        notifications: string;
        settings: string;
        no_message: string;
        no_notification: string;
        logout: string;
        close: string;
        sure_logout: string;
        you_have: string;
        messages: string;
        unread_message: string;
        unread_notification: string;
        unread_messages: string;
        unread_notifications: string;
        view_all_messages: string;
        view_all_notifications: string;
      };
      footer: { copyright: string; all_rights: string };
      sidebar: {
        customer: string;
        admin: string;
        user: string;
        titles: {
          menu: string;
          content: string;
          finances: string;
          membership: string;
          config: string;
        };
        menu: {
          dashboard: { title: string };
          notifications: { title: string };
          admins: { title: string; add: string; index: string };
          users: { title: string; add: string; index: string };
          packs: { title: string; add: string; index: string };
          holders: { title: string; add: string; index: string };
          payouts: { title: string; add: string; index: string };
          reports: {
            title: string;
            purchase: string;
            paid_bonus: string;
            commission: string;
          };
          cms: {
            title: string;
            global: string;
            general: string;
            auth: string;
            backend: string;
            frontend: string;
          };
          settings: {
            title: string;
            system_user: string;
            company_profile: string;
            methods: string;
            kyc: string;
            generation: string;
            mlm: string;
            send_token: string;
            language: string;
          };
          courses: { title: string };
          commissions: { title: string };
          bonus: { title: string };
          transfer: { title: string };
          kyc: { title: string };
        };
      };
      components: {
        form: {
          save: string;
          save_add: string;
          selected_file: string;
          active: string;
          inactive: string;
          pending: string;
          failed: string;
          completed: string;
        };
        list: {
          action: string;
          all: string;
          first: string;
          last: string;
          loading: string;
          print: string;
          pdf: string;
          csv: string;
          excel: string;
          search: string;
          see: string;
          show: string;
          sl: string;
          showing: string;
          from: string;
          entries: { singular: string; plural: string };
        };
      };
      messages: {
        admins: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        users: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        roles: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        features: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        events: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        ministries: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        categories: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        subscribers: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        publications: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        lessons: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        methods: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        donations: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        tithes: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        transactions: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        staff_members: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        members: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        testimonials: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        images: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        notifications: {
          not_found: string;
          created: string;
          updated: string;
          deleted: string;
        };
        settings: { failure: string; success: string };
        cms: { not_found: string; updated: string };
      };
      pages: {
        dashboard: {
          customer: {
            icon: string;
            title: string;
            subtitle: string;
            blocks: {
              users: string;
              testimonials: string;
              events: string;
              images: string;
            };
          };
          admin: {
            icon: string;
            title: string;
            subtitle: string;
            blocks: {
              users: string;
              testimonials: string;
              events: string;
              images: string;
            };
          };
          user: {
            icon: string;
            title: string;
            subtitle: string;
            blocks: {
              users: string;
              testimonials: string;
              events: string;
              images: string;
            };
            general_report: {
              title: string;
              subtitle: string;
              testimonials: string;
              total_testimonials: string;
            };
          };
        };
        cms: {
          title: string;
          global: string;
          general: string;
          messages: string;
          frontend: string;
          components: string;
          backend: string;
          auth: string;
          form: {
            logo: string;
            favicon: string;
            app_name: string;
            company_name: string;
            company_logo: string;
          };
        };
        users: {
          title: string;
          add: string;
          edit: string;
          index: string;
        };
        packs: {
          title: string;
          add: string;
          edit: string;
          index: string;
        };
        holders: {
          title: string;
          add: string;
          edit: string;
          index: string;
        };
        payouts: {
          title: string;
          add: string;
          edit: string;
          index: string;
        };
        reports: {
          title: string;
          purchase: string;
          paid_bonus: string;
          commission: string;
        };
        notifications: {
          title: string;
          show: string;
          index: string;
          form: {
            you_have_no_notification: string;
            read: string;
            type: string;
            message: string;
            created_at: string;
          };
        };
        settings: {
          title: string;
          system_user: string;
          company_profile: string;
          methods: string;
          kyc: string;
          generation: string;
          mlm: string;
          send_token: string;
          language: string;
        };
        courses: { title: string };
        commissions: { title: string };
        bonus: { title: string };
        transfer: { title: string };
        kyc: { title: string };
      };
    };
    frontend: {
      header: {
        menu: {
          home: string;
          about: string;
          white_paper: string;
          team: string;
          partners: string;
          sign_in: string;
          create_account: string;
        };
      };
      footer: {
        top: {
          navigation: {
            head: string;
            title: string;
            menu: {
              home: string;
              about: string;
              events: string;
              ministries: string;
              contact: string;
            };
          };
          contact: { head: string; title: string; address: string };
          ministries: { head: string; title: string };
        };
        bottom: { all_rights: string };
      };
      components: {
        form: { loading: string };
        section: { read_more: string };
        event_block: { read_more: string };
        give: {
          title: string;
          subtitle: string;
          form: {
            first_name: string;
            last_name: string;
            email: string;
            phone: string;
            address: string;
            select_event: string;
            date: string;
            comment: string;
            continue: string;
          };
        };
      };
      messages: {
        contact: { success: string; failure: string };
        give: { success: string; failure: string };
      };
      pages: {
        home: {
          banner: { title: string; subtitle: string };
          about: {
            head: string;
            title: string;
            description: string;
            events: string[];
            read_more: string;
          };
          testimonials: { head: string; title: string; view_all: string };
          events: { head: string; title: string; view_all: string };
          contact: { head: string; title: string; address: string };
        };
        about: {
          title: string;
          subtitle: string;
          description: string;
          about: {
            head: string;
            title: string;
            description: string;
            events: string[];
            read_more: string;
          };
          events: { head: string; title: string; view_all: string };
          contact: { head: string; title: string; address: string };
        };
        contact: {
          title: string;
          subtitle: string;
          description: string;
          contact: { head: string; title: string; address: string };
          form: {
            head: string;
            title: string;
            description: string;
            name: string;
            email: string;
            subject: string;
            message: string;
            submit: string;
          };
        };
        events: {
          title: string;
          subtitle: string;
          description: string;
          events: { head: string; title: string };
        };
        ministries: {
          title: string;
          subtitle: string;
          description: string;
          ministries: { head: string; title: string };
        };
      };
    };
  };
}
