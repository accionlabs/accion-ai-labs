import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation('contact');
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-4">
            {t('header.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('header.description')}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
              <div className="flex items-center mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">{t('companyInfo.title')}</h2>
              </div>
              <p className="text-gray-600 mb-6">
                {t('companyInfo.description')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t('companyInfo.usOffice.label')}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {t('companyInfo.usOffice.address')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t('companyInfo.email.label')}</p>
                    <a href="mailto:info@accionlabs.com" className="text-sm text-secondary hover:text-brand-blue-700">
                      info@accionlabs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <GlobeAltIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t('companyInfo.website.label')}</p>
                    <a href="https://www.accionlabs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-brand-blue-700">
                      www.accionlabs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-gradient-to-br from-secondary/10 to-brand-purple-50 rounded-xl border border-secondary p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('nextSteps.title')}</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">1</span>
                  <div>
                    <strong className="text-gray-900">{t('nextSteps.step1.title')}</strong>
                    <p className="text-gray-600">{t('nextSteps.step1.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">2</span>
                  <div>
                    <strong className="text-gray-900">{t('nextSteps.step2.title')}</strong>
                    <p className="text-gray-600">{t('nextSteps.step2.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">3</span>
                  <div>
                    <strong className="text-gray-900">{t('nextSteps.step3.title')}</strong>
                    <p className="text-gray-600">{t('nextSteps.step3.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">4</span>
                  <div>
                    <strong className="text-gray-900">{t('nextSteps.step4.title')}</strong>
                    <p className="text-gray-600">{t('nextSteps.step4.description')}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('form.title')}</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.workEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.interest.label')}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  >
                    <option value="">{t('form.interest.placeholder')}</option>
                    <option value="technical-debt">{t('form.interest.technicalDebt')}</option>
                    <option value="portfolio">{t('form.interest.portfolio')}</option>
                    <option value="support-automation">{t('form.interest.supportAutomation')}</option>
                    <option value="customer-onboarding">{t('form.interest.customerOnboarding')}</option>
                    <option value="analytics">{t('form.interest.analytics')}</option>
                    <option value="custom">{t('form.interest.custom')}</option>
                    <option value="other">{t('form.interest.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.message.label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder={t('form.message.placeholder')}
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="consent" className="text-xs text-gray-600">
                    {t('form.consent')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-innovation-gradient text-white font-semibold rounded-lg hover:from-brand-blue-700 hover:to-brand-purple-700 transition-all transform hover:scale-[1.02]"
                >
                  {t('form.submit')}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                {t('form.requiredFields')}
              </p>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                <CalendarIcon className="h-6 w-6 text-secondary mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">{t('alternativeContact.demo.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('alternativeContact.demo.description')}
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-purple-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">{t('alternativeContact.technical.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('alternativeContact.technical.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{t('globalPresence.title')}</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('globalPresence.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900">{t('globalPresence.northAmerica.title')}</h3>
              <p className="text-sm text-gray-600">{t('globalPresence.northAmerica.locations')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-brand-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{t('globalPresence.asiaPacific.title')}</h3>
              <p className="text-sm text-gray-600">{t('globalPresence.asiaPacific.locations')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-gray-900">{t('globalPresence.europe.title')}</h3>
              <p className="text-sm text-gray-600">{t('globalPresence.europe.locations')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="h-6 w-6 text-warning" />
              </div>
              <h3 className="font-semibold text-gray-900">{t('globalPresence.middleEast.title')}</h3>
              <p className="text-sm text-gray-600">{t('globalPresence.middleEast.locations')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
